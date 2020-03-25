import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-faq",
  templateUrl: "./faq.page.html",
  styleUrls: ["./faq.page.scss"]
})
export class FaqPage {
  constructor(public navCtrl: NavController) {}

  gotoFaqdetail() {
    this.navCtrl.navigateForward("faqdetail");
  }
}
