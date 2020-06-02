import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-checklistinnerchecktwo",
  templateUrl: "./checklistinnerchecktwo.page.html",
  styleUrls: ["./checklistinnerchecktwo.page.scss"],
})
export class ChecklistinnerchecktwoPage {
  constructor(public navCtrl: NavController) {}

  gotoChecklistinnercheckone() {
    this.navCtrl.navigateForward("checklistinnercheckone");
  }

  gotoChecklistinnercheckthree() {
    this.navCtrl.navigateForward("checklistinnercheckthree");
  }
}
