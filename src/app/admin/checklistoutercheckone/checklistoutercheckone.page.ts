import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-checklistoutercheckone",
  templateUrl: "./checklistoutercheckone.page.html",
  styleUrls: ["./checklistoutercheckone.page.scss"],
})
export class ChecklistoutercheckonePage {
  constructor(public navCtrl: NavController) {}

  gotoChecklistouterchecktwo() {
    this.navCtrl.navigateForward("checklistouterchecktwo");
  }
}
