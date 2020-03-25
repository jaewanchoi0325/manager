import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-managerbuilding",
  templateUrl: "./managerbuilding.page.html",
  styleUrls: ["./managerbuilding.page.scss"]
})
export class ManagerbuildingPage {
  constructor(public navCtrl: NavController) {}

  gotoManagerbuildingdetail() {
    this.navCtrl.navigateForward("managerbuildingdetail");
  }
}
