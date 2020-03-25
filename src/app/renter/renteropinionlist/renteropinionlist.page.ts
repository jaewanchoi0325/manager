import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-renteropinionlist",
  templateUrl: "./renteropinionlist.page.html",
  styleUrls: ["./renteropinionlist.page.scss"]
})
export class RenteropinionlistPage {
  constructor(public navCtrl: NavController) {}

  gotoRenteropiniondetail() {
    this.navCtrl.navigateForward("renteropiniondetail");
  }
}
