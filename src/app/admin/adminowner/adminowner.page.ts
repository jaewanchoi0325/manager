import { Component } from "@angular/core";
import { NavController } from "@ionic/angular";
import { AddressPage } from "src/app/admin/address/address.page";

@Component({
  selector: "app-adminowner",
  templateUrl: "./adminowner.page.html",
  styleUrls: ["./adminowner.page.scss"],
})
export class AdminownerPage {
  dataReceived: string = "";

  constructor(public navCtrl: NavController) {}

  gotoAddress() {
    this.navCtrl.navigateForward("address");
  }
}
