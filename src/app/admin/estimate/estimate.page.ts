import { Component, OnInit } from "@angular/core";
import { AlertController, NavController } from "@ionic/angular";

@Component({
  selector: "app-estimate",
  templateUrl: "./estimate.page.html",
  styleUrls: ["./estimate.page.scss"],
})
export class EstimatePage {
  constructor(
    public navCtrl: NavController,
    public alertController: AlertController
  ) {}

  async gotoEstimatealert() {
    var alert = await this.alertController.create({
      header: "작성완료",
      message: "작성이 완료되었습니다.",
      buttons: ["확인"],
    });
    await alert.present();
    var result = await alert.onDidDismiss();
  }

  gotoEstimatelist() {
    this.navCtrl.navigateForward("estimatelist");
  }
}
