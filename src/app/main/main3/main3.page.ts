import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-main3",
  templateUrl: "./main3.page.html",
  styleUrls: ["./main3.page.scss"]
})
export class Main3Page {
  constructor(public navCtrl: NavController) {}

  gotoManagerbuilding() {
    this.navCtrl.navigateForward("managerbuilding");
  }

  gotoOpinion() {
    this.navCtrl.navigateForward("opinion");
  }

  gotoFaq() {
    this.navCtrl.navigateForward("faq");
  }

  gotoNotice() {
    this.navCtrl.navigateForward("notice");
  }
}
