import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-checklist",
  templateUrl: "./checklist.page.html",
  styleUrls: ["./checklist.page.scss"],
})
export class ChecklistPage {
  constructor(public navCtrl: NavController) {}

  gotoChecklistouter() {
    this.navCtrl.navigateForward("checklistouter");
  }

  gotoChecklistinner() {
    this.navCtrl.navigateForward("checklistinner");
  }

  gotoChecklistfix() {
    this.navCtrl.navigateForward("checklistfix");
  }
}
