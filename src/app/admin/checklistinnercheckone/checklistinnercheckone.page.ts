import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-checklistinnercheckone",
  templateUrl: "./checklistinnercheckone.page.html",
  styleUrls: ["./checklistinnercheckone.page.scss"],
})
export class ChecklistinnercheckonePage {
  constructor(public navCtrl: NavController) {}

  gotoChecklistinnerchecktwo() {
    this.navCtrl.navigateForward("checklistinnerchecktwo");
  }
}
