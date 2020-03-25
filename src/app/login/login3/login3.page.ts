import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-login3",
  templateUrl: "./login3.page.html",
  styleUrls: ["./login3.page.scss"]
})
export class Login3Page {
  constructor(public navCtrl: NavController) {}

  gotoMain3() {
    this.navCtrl.navigateForward("main3");
  }

  gotoSignUp3() {
    this.navCtrl.navigateForward("signup3");
  }
}
