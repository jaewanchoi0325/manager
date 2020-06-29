// 기본 임포트 설정
import { Component } from "@angular/core";
// 네비게이션 기능 추가 임포트
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-main3",
  templateUrl: "./main3.page.html",
  styleUrls: ["./main3.page.scss"],
})
export class Main3Page {
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

  // 임대인 등록하기(registerowner)로 이동하는 네비게이션 코드
  gotoRegisterowner() {
    this.navCtrl.navigateForward("registerowner");
  }

  //임대인 관리하기(adminowner)로 이동하는 네비게이션 코드
  gotoAdminowner() {
    this.navCtrl.navigateForward("adminowner");
  }

  // 관리건물 상세내역(managerbuilding)으로 이동하는 네비게이션 코드
  gotoManagerbuilding() {
    this.navCtrl.navigateForward("managerbuilding");
  }

  // 민원내역(opinion)으로 이동하는 네비게이션 코드
  gotoOpinion() {
    this.navCtrl.navigateForward("opinion");
  }

  // 대형폐기물 처리내역(trashchecklist)으로 이동하는 네비게이션 코드
  gotoTrashchecklist() {
    this.navCtrl.navigateForward("trashchecklist");
  }

  // 수리견적서 작성(estimate)으로 이동하는 네비게이션 코드
  gotoEstimate() {
    this.navCtrl.navigateForward("estimate");
  }

  // 점검표 작성하기(checklist)으로 이동하는 네비게이션 코드
  gotoChecklist() {
    this.navCtrl.navigateForward("checklist");
  }

  // 질문사항(faq)으로 이동하는 네비게이션 코드
  gotoFaq() {
    this.navCtrl.navigateForward("faq");
  }

  // 공지사항(notice)으로 이동하는 네비게이션 코드
  gotoNotice() {
    this.navCtrl.navigateForward("notice");
  }
}
