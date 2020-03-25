import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-contract",
  templateUrl: "./contract.page.html",
  styleUrls: ["./contract.page.scss"]
})
export class ContractPage {
  constructor(public navCtrl: NavController) {}

  gotoContractview() {
    this.navCtrl.navigateForward("contractview");
  }

  gotoContractextension() {
    this.navCtrl.navigateForward("contractextension");
  }

  gotoContractremoval() {
    this.navCtrl.navigateForward("contractremoval");
  }
}
