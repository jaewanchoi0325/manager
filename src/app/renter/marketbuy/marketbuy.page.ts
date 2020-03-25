import { Component, OnInit } from "@angular/core";
import { AlertController, NavController } from "@ionic/angular";

@Component({
  selector: "app-marketbuy",
  templateUrl: "./marketbuy.page.html",
  styleUrls: ["./marketbuy.page.scss"]
})
export class MarketbuyPage {
  constructor(
    public alertController: AlertController,
    public navCtrl: NavController
  ) {}

  async gotoMarketbuyalert() {
    var alert = await this.alertController.create({
      header: "메세지 수신 완료",
      message: "구입 메세지가 전송되었습니다.",
      buttons: ["확인"]
    });
    await alert.present();
    var result = await alert.onDidDismiss();
    this.navCtrl.navigateForward("market");
  }
}
