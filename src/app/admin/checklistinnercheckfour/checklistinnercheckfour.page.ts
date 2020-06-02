import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-checklistinnercheckfour",
  templateUrl: "./checklistinnercheckfour.page.html",
  styleUrls: ["./checklistinnercheckfour.page.scss"],
})
export class ChecklistinnercheckfourPage {
  constructor(public navCtrl: NavController) {}

  gotoChecklistinnercheckthree() {
    this.navCtrl.navigateForward("checklistinnercheckthree");
  }

  gotoChecklistinnercheckfive() {
    this.navCtrl.navigateForward("checklistinnercheckfive");
  }
}
