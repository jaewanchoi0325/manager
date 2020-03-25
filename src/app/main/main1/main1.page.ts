import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-main1",
  templateUrl: "./main1.page.html",
  styleUrls: ["./main1.page.scss"]
})
export class Main1Page {
  constructor(public navCtrl: NavController) {}

  gotoPay() {
    this.navCtrl.navigateForward("pay");
  }

  gotoControl() {
    this.navCtrl.navigateForward("control");
  }

  gotoFaq() {
    this.navCtrl.navigateForward("faq");
  }

  gotoNotice() {
    this.navCtrl.navigateForward("notice");
  }

  gotoOwnerOpinion() {
    this.navCtrl.navigateForward("owneropinion");
  }

  gotoRepair() {
    this.navCtrl.navigateForward("repair");
  }
}
