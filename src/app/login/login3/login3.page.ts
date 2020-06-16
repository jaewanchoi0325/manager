// 기본 임포트 설정
import { Component } from "@angular/core";
// 네비게이션 기능 추가 임포트
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-login3",
  templateUrl: "./login3.page.html",
  styleUrls: ["./login3.page.scss"],
})
export class Login3Page {
  // public navCtrl: NavController 는 네비게이션 기능을 추가하는 코드
  // 입력시 네비게이션 컴포넌트가 자동으로 생성됨
  constructor(public navCtrl: NavController) {}

  // 임차인 메뉴(main3)로 이동하는 네비게이션 코드
  gotoMain3() {
    this.navCtrl.navigateForward("main3");
  }

  // 임차인 회원가입(signup3)으로 이동하는 네비게이션 코드
  gotoSignUp3() {
    this.navCtrl.navigateForward("signup3");
  }
}
