import { Component, Injectable } from "@angular/core";
import { AddressService } from "src/app/service/address.service";
import { HttpClient } from "@angular/common/http";
import { AlertController, NavController } from "@ionic/angular";
import { Router, NavigationExtras } from "@angular/router";

@Injectable()
export class ProductProvider {
  url: string;
  constructor(public http: HttpClient) {
    this.url = "http://juso.go.kr";
  }
}

@Component({
  selector: "app-address",
  templateUrl: "./address.page.html",
  styleUrls: ["./address.page.scss"],
})
export class AddressPage {
  Object = Object;
  loading: any;
  retList = [];
  page: number = 1;
  addrText: any;

  zipCode: string = " ";
  address: string = " ";

  user = {};

  constructor(
    public service: AddressService,
    public alertController: AlertController,
    public navCtrl: NavController,
    public router: Router
  ) {}

  private newMethod() {
    return this.retList;
  }

  async gotoOutput(ret: any) {
    console.log(ret.zipNo, ret.roadAddr);
    this.zipCode = ret.zipNo;
    this.address = ret.roadAddr;
    this.user = {
      zipCode: this.zipCode,
      address: this.address,
    };

    const alert = await this.alertController.create({
      header: "주소 설정하기",
      message: ret.zipNo + ret.roadAddr + "해당 주소로 설정하시겠습니까?",
      buttons: [
        {
          text: "취소",
          role: "cancel",
          handler: () => {},
        },
        {
          text: "확인",
          handler: async () => {
            var alert = await this.alertController.create({
              header: "설정완료",
              message: "설정이 완료되었습니다.",
              buttons: ["확인"],
            });
            await alert.present();
            this.navCtrl.navigateForward("registerowner");
            let navigationExtras: NavigationExtras = {
              queryParams: {
                special: JSON.stringify(this.user),
              },
            };
            this.router.navigate(["registerowner"], navigationExtras);
            this.zipCode = ``;
            this.address = ``;
            // this.router.navigate(["registerowner"], {
            //   queryParams: { 우편번호: this.zipCode, 주소: this.address },
            // });
          },
        },
      ],
    });
    await alert.present();
    let result = await alert.onDidDismiss();
  }

  async addrsearch(searchText: string) {
    await this.service
      .addrsearch(searchText, this.page, 100)
      .then((res: any) => {
        console.log(res);

        this.retList = [];
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < res.results.juso.length; i++) {
          console.log(res.results.juso[i]);
          this.retList.push(res.results.juso[i]);
        }

        for (let j = 0; j < res.results.common.length; j++) {
          console.log(res.results.common[j]);
          this.retList.push(res.results.common[j]);
        }
      });
  }
}
