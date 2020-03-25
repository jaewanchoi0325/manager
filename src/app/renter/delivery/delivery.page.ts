import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-delivery",
  templateUrl: "./delivery.page.html",
  styleUrls: ["./delivery.page.scss"]
})
export class DeliveryPage {
  constructor(public navCtrl: NavController) {}

  gotoDeliverydetail() {
    this.navCtrl.navigateForward("deliverydetail");
  }
}
