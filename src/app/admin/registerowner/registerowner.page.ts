// 기본 임포트 설정
import { Component, OnInit } from "@angular/core";
// 네비게이션 기능 , 알람창 기능 추가 임포트
import { AlertController, NavController } from "@ionic/angular";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-registerowner",
  templateUrl: "./registerowner.page.html",
  styleUrls: ["./registerowner.page.scss"],
})
export class RegisterownerPage implements OnInit {
  // inviteCode1부터 8까지 초대코드 변수
  inviteCode1;
  inviteCode2;
  inviteCode3;
  inviteCode4;
  inviteCode5;
  inviteCode6;
  inviteCode7;
  inviteCode8;

  dataReceived: any;

  constructor(
    // public alertController: AlertController 는 알람 창을 띄워지는 코드
    // 입력시 알람컨트롤러 임포트가 자동으로 생성됨
    // public navCtrl: NavController 는 네비게이션 기능을 추가하는 코드
    // 입력시 네비게이션 컴포넌트가 자동으로 생성됨
    public alertController: AlertController,
    public navCtrl: NavController,
    public activatedRoute: ActivatedRoute,
    public router: Router
  ) {
    this.activatedRoute.queryParams.subscribe((params) => {
      if (params && params.special) {
        this.dataReceived = JSON.parse(params.special);
      }
    });
    // this.activatedRoute.queryParams.subscribe((data) => {
    //   this.dataReceived = JSON.stringify(data);
    // });
  }

  ngOnInit() {}

  //숫자 0부터 9까지 무작위로 받는 함수
  getRandomnumber() {
    // Math내장함수를 이용
    // randomNumber1~8은 0부터 9까지 무작위로 받는 변수로 설정
    let randomNumber1: number = Math.round(Math.random() * 10);
    let randomNumber2: number = Math.round(Math.random() * 10);
    let randomNumber3: number = Math.round(Math.random() * 10);
    let randomNumber4: number = Math.round(Math.random() * 10);
    let randomNumber5: number = Math.round(Math.random() * 10);
    let randomNumber6: number = Math.round(Math.random() * 10);
    let randomNumber7: number = Math.round(Math.random() * 10);
    let randomNumber8: number = Math.round(Math.random() * 10);
    this.inviteCode1 = `${
      randomNumber1 >= 10
        ? `${Math.abs(randomNumber1 - Math.round(Math.random() * 10 + 1))}`
        : `${randomNumber1}`
    }`.toString();
    this.inviteCode2 = `${
      randomNumber2 >= 10
        ? `${Math.abs(randomNumber2 - Math.round(Math.random() * 10 + 1))}`
        : `${randomNumber2}`
    }`.toString();
    this.inviteCode3 = `${
      randomNumber3 >= 10
        ? `${Math.abs(randomNumber3 - Math.round(Math.random() * 10 + 1))}`
        : `${randomNumber3}`
    }`.toString();
    this.inviteCode4 = `${
      randomNumber4 >= 10
        ? `${Math.abs(randomNumber4 - Math.round(Math.random() * 10 + 1))}-`
        : `${randomNumber4}-`
    }`.toString();
    this.inviteCode5 = `${
      randomNumber5 >= 10
        ? `${Math.abs(randomNumber5 - Math.round(Math.random() * 10 + 1))}`
        : `${randomNumber5}`
    }`.toString();
    this.inviteCode6 = `${
      randomNumber6 >= 10
        ? `${Math.abs(randomNumber6 - Math.round(Math.random() * 10 + 1))}`
        : `${randomNumber6}`
    }`.toString();
    this.inviteCode7 = `${
      randomNumber7 >= 10
        ? `${Math.abs(randomNumber7 - Math.round(Math.random() * 10 + 1))}`
        : `${randomNumber7}`
    }`.toString();
    this.inviteCode8 = `${
      randomNumber8 >= 10
        ? `${Math.abs(randomNumber8 - Math.round(Math.random() * 10 + 1))}`
        : `${randomNumber8}`
    }`.toString();
  }

  // 회원가입을 누르면 알람 창이 뜨게하는 알람 코드
  async gotoRegisterownerAlert1() {
    var alert = await this.alertController.create({
      header: "발송완료",
      message: "초대코드 발송이 완료되었습니다.",
      buttons: ["확인"],
    });
    await alert.present();
    var result = await alert.onDidDismiss();
  }

  async gotoRegisterownerAlert2() {
    var alert = await this.alertController.create({
      header: "등록완료",
      message: "등록이 완료되었습니다.",
      buttons: ["확인"],
    });
    await alert.present();
    var result = await alert.onDidDismiss();
    this.navCtrl.navigateForward("main3");
    this.inviteCode1 = ``;
    this.inviteCode2 = ``;
    this.inviteCode3 = ``;
    this.inviteCode4 = ``;
    this.inviteCode5 = ``;
    this.inviteCode6 = ``;
    this.inviteCode7 = ``;
    this.inviteCode8 = ``;
  }

  gotoAddress() {
    this.navCtrl.navigateForward("address");
  }

  // this.inviteCode2 = `${
  //   randomNumber2 === 0
  //     ? `${randomNumber2 + Math.round(Math.random() * 10 + 10)}`
  //     : randomNumber2 < 10
  //     ? `${randomNumber2 * 10}`
  //     : `${randomNumber2}`
  // }`.toString();
}
