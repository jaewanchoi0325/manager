import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-pricedetail",
  templateUrl: "./pricedetail.page.html",
  styleUrls: ["./pricedetail.page.scss"]
})
export class PricedetailPage {
  constructor(public navCtrl: NavController) {}

  gotoPricepay() {
    this.navCtrl.navigateForward("pricepay");
  }
}
