import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-controlextend",
  templateUrl: "./controlextend.page.html",
  styleUrls: ["./controlextend.page.scss"]
})
export class ControlextendPage {
  constructor(public navCtrl: NavController) {}

  gotoControlExtendDetail() {
    this.navCtrl.navigateForward("controlextenddetail");
  }
}
