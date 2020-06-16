import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-main3",
  templateUrl: "./main3.page.html",
  styleUrls: ["./main3.page.scss"],
})
export class Main3Page {
  todayDate;
  constructor(public navCtrl: NavController) {
    this.getTodayDate();
  }

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

  gotoManagerbuilding() {
    this.navCtrl.navigateForward("managerbuilding");
  }

  gotoOpinion() {
    this.navCtrl.navigateForward("opinion");
  }

  gotoTrashchecklist() {
    this.navCtrl.navigateForward("trashchecklist");
  }

  gotoEstimate() {
    this.navCtrl.navigateForward("estimate");
  }

  gotoChecklist() {
    this.navCtrl.navigateForward("checklist");
  }

  gotoFaq() {
    this.navCtrl.navigateForward("faq");
  }

  gotoNotice() {
    this.navCtrl.navigateForward("notice");
  }
}
