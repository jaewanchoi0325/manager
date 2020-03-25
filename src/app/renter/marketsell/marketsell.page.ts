import { Component, OnInit } from "@angular/core";
import { AlertController, NavController } from "@ionic/angular";

@Component({
  selector: "app-marketsell",
  templateUrl: "./marketsell.page.html",
  styleUrls: ["./marketsell.page.scss"]
})
export class MarketsellPage {
  constructor(
    public alertController: AlertController,
    public navCtrl: NavController
  ) {}

  async gotoMarketsellalert() {
    var alert = await this.alertController.create({
      header: "가입완료",
      message: "가입이 완료되었습니다.",
      buttons: ["확인"]
    });
    await alert.present();
    var result = await alert.onDidDismiss();
    this.navCtrl.navigateForward("market");
  }
}
