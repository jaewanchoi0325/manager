import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-extend",
  templateUrl: "./control.page.html",
  styleUrls: ["./control.page.scss"],
})
export class ControlPage {
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

  gotoControlExtend() {
    this.navCtrl.navigateForward("controlextend");
  }
  gotoControlRemoval() {
    this.navCtrl.navigateForward("controlremoval");
  }
}
