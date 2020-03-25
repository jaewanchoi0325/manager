import { Component } from "@angular/core";
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-home",
  templateUrl: "start.page.html",
  styleUrls: ["start.page.scss"]
})
export class StartPage {
  constructor(public navCtrl: NavController) {}

  gotoLogin1() {
    this.navCtrl.navigateForward("login1");
  }

  gotoLogin2() {
    this.navCtrl.navigateForward("login2");
  }

  gotoLogin3() {
    this.navCtrl.navigateForward("login3");
  }
}
