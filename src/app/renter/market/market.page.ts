import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-market",
  templateUrl: "./market.page.html",
  styleUrls: ["./market.page.scss"]
})
export class MarketPage {
  constructor(public navCtrl: NavController) {}

  gotoMarketbuy() {
    this.navCtrl.navigateForward("marketbuy");
  }

  gotoMarketsell() {
    this.navCtrl.navigateForward("marketsell");
  }
}
