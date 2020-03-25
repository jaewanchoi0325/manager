import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-login2",
  templateUrl: "./login2.page.html",
  styleUrls: ["./login2.page.scss"]
})
export class Login2Page {
  constructor(public navCtrl: NavController) {}

  gotoMain2() {
    this.navCtrl.navigateForward("main2");
  }

  gotoSignUp2() {
    this.navCtrl.navigateForward("signup2");
  }
}
