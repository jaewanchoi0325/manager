import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-opinion",
  templateUrl: "./opinion.page.html",
  styleUrls: ["./opinion.page.scss"]
})
export class OpinionPage {
  constructor(public navCtrl: NavController) {}

  gotoOpiniondetail() {
    this.navCtrl.navigateForward("opiniondetail");
  }
}
