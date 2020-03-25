import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-extend",
  templateUrl: "./control.page.html",
  styleUrls: ["./control.page.scss"]
})
export class ControlPage {
  constructor(public navCtrl: NavController) {}

  gotoControlExtend() {
    this.navCtrl.navigateForward("controlextend");
  }
  gotoControlRemoval() {
    this.navCtrl.navigateForward("controlremoval");
  }
}
