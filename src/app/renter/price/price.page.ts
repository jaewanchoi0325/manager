import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-price",
  templateUrl: "./price.page.html",
  styleUrls: ["./price.page.scss"]
})
export class PricePage {
  constructor(public navCtrl: NavController) {}

  gotoPricedetail() {
    this.navCtrl.navigateForward("pricedetail");
  }

  gotoPricepay() {
    this.navCtrl.navigateForward("pricepay");
  }
}
