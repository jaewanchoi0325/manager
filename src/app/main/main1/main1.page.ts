// 기본 임포트 설정
import { Component } from "@angular/core";
// 네비게이션 기능 추가 임포트
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-main1",
  templateUrl: "./main1.page.html",
  styleUrls: ["./main1.page.scss"],
})
export class Main1Page {
  //todayDate:현재요일을 나타나게 하는 변수 이름
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

  // 계약정보 보기(pay)로 이동하는 네비게이션 코드
  gotoPay() {
    this.navCtrl.navigateForward("pay");
  }

  // 연장 및 퇴거알림(control)로 이동하는 네비게이션 코드
  gotoControl() {
    this.navCtrl.navigateForward("control");
  }

  // 민원확인(owneropinion)로 이동하는 네비게이션 코드
  gotoOwnerOpinion() {
    this.navCtrl.navigateForward("owneropinion");
  }

  // 주택수리요청(repair)로 이동하는 네비게이션 코드
  gotoRepair() {
    this.navCtrl.navigateForward("repair");
  }

  // 질문사항(faq)로 이동하는 네비게이션 코드
  gotoFaq() {
    this.navCtrl.navigateForward("faq");
  }

  // 공지사항(notice)로 이동하는 네비게이션 코드
  gotoNotice() {
    this.navCtrl.navigateForward("notice");
  }
}
