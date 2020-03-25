import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-parkingvisitlist",
  templateUrl: "./parkingvisitlist.page.html",
  styleUrls: ["./parkingvisitlist.page.scss"]
})
export class ParkingvisitlistPage {
  constructor(public navCtrl: NavController) {}

  gotoParkingvisitlistdetail() {
    this.navCtrl.navigateForward("parkingvisitlistdetail");
  }
}
