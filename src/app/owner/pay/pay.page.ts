import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-pay",
  templateUrl: "./pay.page.html",
  styleUrls: ["./pay.page.scss"],
})
export class PayPage {
  constructor(public navCtrl: NavController) {}

  gotoPaydetail() {
    this.navCtrl.navigateForward("paydetail");
  }
}
