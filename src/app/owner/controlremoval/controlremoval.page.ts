// 기본 임포트 설정
import { Component } from "@angular/core";
// 네비게이션 기능 추가 임포트
import { NavController } from "@ionic/angular";
@Component({
  selector: "app-controlremoval",
  templateUrl: "./controlremoval.page.html",
  styleUrls: ["./controlremoval.page.scss"],
})
export class ControlremovalPage {
  constructor(
    // public navCtrl: NavController 는 네비게이션 기능을 추가하는 코드
    // 입력시 네비게이션 컴포넌트가 자동으로 생성됨
    public navCtrl: NavController
  ) {}

  // 퇴거요청 신청하기(controlremovaldetail)로 이동하는 네비게이션 코드
  gotoControlRemovalDetail() {
    this.navCtrl.navigateForward("controlremovaldetail");
  }
}
