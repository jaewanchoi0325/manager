// 기본 임포트 설정
import { Component } from "@angular/core";
// 네비게이션 기능 추가 임포트
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-main2",
  templateUrl: "./main2.page.html",
  styleUrls: ["./main2.page.scss"],
})
export class Main2Page {
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

  // 관리비 및 월세조회 및 납부 버튼(price)로 이동하는 네비게이션 코드
  gotoPrice() {
    this.navCtrl.navigateForward("price");
  }

  // 임대계약 정보조회 및 연장 퇴거 요청 버튼(contract)로 이동하는 네비게이션 코드
  gotoContract() {
    this.navCtrl.navigateForward("contract");
  }

  // 민원내역 및 작성 버튼(contract)로 이동하는 네비게이션 코드
  gotoRenteropinion() {
    this.navCtrl.navigateForward("renteropinion");
  }

  // 대형폐기물처리 신청하기(contract)로 이동하는 네비게이션 코드
  gotoTrash() {
    this.navCtrl.navigateForward("trash");
  }

  // 택배함 조회 버튼(contract)로 이동하는 네비게이션 코드
  gotoDelivery() {
    this.navCtrl.navigateForward("delivery");
  }

  // 주차서비스 버튼(contract)로 이동하는 네비게이션 코드
  gotoParking() {
    this.navCtrl.navigateForward("parking");
  }

  // 벼룩시장 버튼(contract)로 이동하는 네비게이션 코드
  gotoMarket() {
    this.navCtrl.navigateForward("market");
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
