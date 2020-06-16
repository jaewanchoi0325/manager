// 기본 임포트 설정
import { Component } from "@angular/core";
// 네비게이션 기능 추가 임포트
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-pay",
  templateUrl: "./pay.page.html",
  styleUrls: ["./pay.page.scss"],
})
export class PayPage {
  // todayDate:현재요일을 나타나게 하는 변수 이름
  todayDate;
  constructor(
    // public navCtrl: NavController 는 네비게이션 기능을 추가하는 코드
    // 입력시 네비게이션 컴포넌트가 자동으로 생성됨
    public navCtrl: NavController
  ) {
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

  // 계약정보 자세히 보기(paydetail)로 이동하는 네비게이션 코드
  // 미완성 코드
  gotoPaydetail() {
    this.navCtrl.navigateForward("paydetail");
  }
}
