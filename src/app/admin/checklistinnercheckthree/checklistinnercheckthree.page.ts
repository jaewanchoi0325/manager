import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-checklistinnercheckthree",
  templateUrl: "./checklistinnercheckthree.page.html",
  styleUrls: ["./checklistinnercheckthree.page.scss"],
})
export class ChecklistinnercheckthreePage {
  constructor(public navCtrl: NavController) {}

  gotoChecklistinnerchecktwo() {
    this.navCtrl.navigateForward("checklistinnerchecktwo");
  }

  gotoChecklistinnercheckfour() {
    this.navCtrl.navigateForward("checklistinnercheckfour");
  }
}
