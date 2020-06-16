// 기본 임포트 설정
import { Component } from "@angular/core";
// 네비게이션 기능 추가 임포트
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-login1",
  templateUrl: "./login1.page.html",
  styleUrls: ["./login1.page.scss"],
})
export class Login1Page {
  // public navCtrl: NavController 는 네비게이션 기능을 추가하는 코드
  // 입력시 네비게이션 컴포넌트가 자동으로 생성됨
  constructor(public navCtrl: NavController) {}

  // 임대인 메뉴(main1)로 이동하는 네비게이션 코드
  gotoMain1() {
    this.navCtrl.navigateForward("main1");
  }

  // 임대인 회원가입(signup1)으로 이동하는 네비게이션 코드
  gotoSignUp1() {
    this.navCtrl.navigateForward("signup1");
  }
}
