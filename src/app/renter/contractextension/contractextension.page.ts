import { Component, OnInit } from "@angular/core";
import { AlertController, NavController } from "@ionic/angular";

@Component({
  selector: "app-contractextension",
  templateUrl: "./contractextension.page.html",
  styleUrls: ["./contractextension.page.scss"]
})
export class ContractextensionPage {
  constructor(
    public alertController: AlertController,
    public navCtrl: NavController
  ) {}

  async gotoContractextensionalert() {
    var alert = await this.alertController.create({
      header: "신청완료",
      message: "신청이 완료되었습니다.",
      buttons: ["확인"]
    });
    await alert.present();
    var result = await alert.onDidDismiss();
    this.navCtrl.navigateForward("contract");
  }
}
