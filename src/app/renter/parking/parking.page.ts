import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-parking",
  templateUrl: "./parking.page.html",
  styleUrls: ["./parking.page.scss"]
})
export class ParkingPage {
  constructor(public navCtrl: NavController) {}

  gotoParkingregister() {
    this.navCtrl.navigateForward("parkingregister");
  }

  gotoParkingvisitlist() {
    this.navCtrl.navigateForward("parkingvisitlist");
  }

  gotoParkingvisitregister() {
    this.navCtrl.navigateForward("parkingvisitregister");
  }
}
