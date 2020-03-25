import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";
@Component({
  selector: "app-controlremoval",
  templateUrl: "./controlremoval.page.html",
  styleUrls: ["./controlremoval.page.scss"]
})
export class ControlremovalPage {
  constructor(public navCtrl: NavController) {}

  gotoControlRemovalDetail() {
    this.navCtrl.navigateForward("controlremovaldetail");
  }
}
