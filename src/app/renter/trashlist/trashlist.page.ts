import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-trashlist",
  templateUrl: "./trashlist.page.html",
  styleUrls: ["./trashlist.page.scss"]
})
export class TrashlistPage {
  constructor(public navCtrl: NavController) {}

  gotoTrashdetail() {
    this.navCtrl.navigateForward("trashdetail");
  }
}
