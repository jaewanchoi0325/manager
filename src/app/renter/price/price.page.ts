import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-price",
  templateUrl: "./price.page.html",
  styleUrls: ["./price.page.scss"],
})
export class PricePage {
  todayMonth;
  constructor(public navCtrl: NavController) {
    this.getTodayMonth();
  }

  getTodayMonth() {
    let dateObj = new Date();

    let month = dateObj.getMonth();

    this.todayMonth = `${month < 10 ? `0${month + 1}` : `0${month}`}`;
    //   if (month < 10) {
    //     this.todayMonth = `0${month + 1}`;
    //   } else {
    //     this.todayMonth = `0${month + 1}`;
    //   }
  }

  gotoPricedetail() {
    this.navCtrl.navigateForward("pricedetail");
  }

  gotoPricepay() {
    this.navCtrl.navigateForward("pricepay");
  }
}
