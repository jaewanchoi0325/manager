import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-repairnotice",
  templateUrl: "./repairnotice.page.html",
  styleUrls: ["./repairnotice.page.scss"]
})
export class RepairnoticePage {
  constructor(public navCtrl: NavController) {}

  ngOnInit() {}
  gotoRepairnoticedetail() {
    this.navCtrl.navigateForward("repairnoticedetail");
  }
}
