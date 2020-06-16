// 기본 임포트 설정
import { Component } from "@angular/core";
// 네비게이션 기능 추가 임포트
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-login2",
  templateUrl: "./login2.page.html",
  styleUrls: ["./login2.page.scss"],
})
export class Login2Page {
  // public navCtrl: NavController 는 네비게이션 기능을 추가하는 코드
  // 입력시 네비게이션 컴포넌트가 자동으로 생성됨
  constructor(public navCtrl: NavController) {}

  // 임차인 메뉴(main2)로 이동하는 네비게이션 코드
  gotoMain2() {
    this.navCtrl.navigateForward("main2");
  }

  // 임차인 회원가입(signup2)으로 이동하는 네비게이션 코드
  gotoSignUp2() {
    this.navCtrl.navigateForward("signup2");
  }
}
