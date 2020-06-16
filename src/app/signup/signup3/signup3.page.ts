// 기본 임포트 설정
import { Component } from "@angular/core";
// 알람창 기능, 네비게이션 기능 추가 임포트
import { AlertController, NavController } from "@ionic/angular";

@Component({
  selector: "app-signup3",
  templateUrl: "./signup3.page.html",
  styleUrls: ["./signup3.page.scss"],
})
export class Signup3Page {
  constructor(
    // public alertController: AlertController 는 알람 창을 띄워지는 코드
    // 입력시 알람컨트롤러 임포트가 자동으로 생성됨
    // public navCtrl: NavController 는 네비게이션 기능을 추가하는 코드
    // 입력시 네비게이션 컴포넌트가 자동으로 생성됨
    public alertController: AlertController,
    public navCtrl: NavController
  ) {}

  // 회원가입을 누르면 알람 창이 뜨게하는 알람 코드
  async gotoSignUp3Alert() {
    var alert = await this.alertController.create({
      header: "가입완료",
      message: "가입이 완료되었습니다.",
      buttons: ["확인"],
    });
    await alert.present();
    var result = await alert.onDidDismiss();
    this.navCtrl.navigateForward("login3");
  }
}
