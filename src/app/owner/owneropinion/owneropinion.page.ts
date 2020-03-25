import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-owneropinion",
  templateUrl: "./owneropinion.page.html",
  styleUrls: ["./owneropinion.page.scss"]
})
export class OwneropinionPage {
  constructor(public navCtrl: NavController) {}

  gotoOwnerOpiniondetail() {
    this.navCtrl.navigateForward("owneropiniondetail");
  }
}
