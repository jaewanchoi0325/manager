import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-login1",
  templateUrl: "./login1.page.html",
  styleUrls: ["./login1.page.scss"]
})
export class Login1Page {
  constructor(public navCtrl: NavController) {}

  gotoMain1() {
    this.navCtrl.navigateForward("main1");
  }

  gotoSignUp1() {
    this.navCtrl.navigateForward("signup1");
  }
}
