import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-main2",
  templateUrl: "./main2.page.html",
  styleUrls: ["./main2.page.scss"]
})
export class Main2Page {
  constructor(public navCtrl: NavController) {}

  gotoFaq() {
    this.navCtrl.navigateForward("faq");
  }

  gotoNotice() {
    this.navCtrl.navigateForward("notice");
  }

  gotoPrice() {
    this.navCtrl.navigateForward("price");
  }

  gotoContract() {
    this.navCtrl.navigateForward("contract");
  }

  gotoRenteropinion() {
    this.navCtrl.navigateForward("renteropinion");
  }

  gotoTrash() {
    this.navCtrl.navigateForward("trash");
  }

  gotoDelivery() {
    this.navCtrl.navigateForward("delivery");
  }

  gotoParking() {
    this.navCtrl.navigateForward("parking");
  }

  gotoMarket() {
    this.navCtrl.navigateForward("market");
  }
}
