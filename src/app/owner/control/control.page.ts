// 기본 임포트 설정
import { Component } from "@angular/core";
// 네비게이션 기능 추가 임포트
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-extend",
  templateUrl: "./control.page.html",
  styleUrls: ["./control.page.scss"],
})
export class ControlPage {
  // todayDate:현재요일을 나타나게 하는 볁수 이름
  todayDate;
  constructor(
    // public navCtrl: NavController 는 네비게이션 기능을 추가하는 코드
    // 입력시 네비게이션 컴포넌트가 자동으로 생성됨
    public navCtrl: NavController
  ) {
    // todatDate를 getTodayDate에 적용
    this.getTodayDate();
  }

  // 현재요일을 나타나게 하는 코드
  getTodayDate() {
    let dateObj = new Date();

    let year = dateObj.getFullYear();
    let month = dateObj.getMonth();
    let date = dateObj.getDate();
    let day = dateObj.getDay().toString();

    let dayArray = [
      "일요일",
      "월요일",
      "화요일",
      "수요일",
      "목요일",
      "금요일",
      "토요일",
    ];

    this.todayDate = `${year}년 
    ${month < 10 ? `0${month + 1}` : `0${month}`}월 
    ${date < 10 ? `0${date}` : `${date}`}일 
    ${dayArray[day]} `;
  }

  // 계약연장(controlextend)로 이동하는 네비게이션 코드
  gotoControlExtend() {
    this.navCtrl.navigateForward("controlextend");
  }

  // 퇴거요청(controlremoval)로 이동하는 네비게이션 코드
  gotoControlRemoval() {
    this.navCtrl.navigateForward("controlremoval");
  }
}
