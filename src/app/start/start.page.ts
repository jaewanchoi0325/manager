// 기본 임포트 설정
import { Component } from "@angular/core";
// 네비게이션 기능 추가 임포트
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-home",
  templateUrl: "start.page.html",
  styleUrls: ["start.page.scss"],
})
export class StartPage {
  // public navCtrl: NavController 는 네비게이션 기능을 추가하는 코드
  // 입력시 네비게이션 컴포넌트가 자동으로 생성됨
  constructor(public navCtrl: NavController) {}

  // 임대인 메뉴(login1)로 이동하는 네비게이션 코드
  gotoLogin1() {
    this.navCtrl.navigateForward("login1");
  }

  // 임차인 메뉴(login2)로 이동하는 네비게이션 코드
  gotoLogin2() {
    this.navCtrl.navigateForward("login2");
  }

  // 관리자 메뉴(login3)로 이동하는 네비게이션 코드
  gotoLogin3() {
    this.navCtrl.navigateForward("login3");
  }
}
