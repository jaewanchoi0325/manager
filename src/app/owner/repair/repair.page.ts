import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";
import { AlertController } from "@ionic/angular";

@Component({
  selector: "app-repair",
  templateUrl: "./repair.page.html",
  styleUrls: ["./repair.page.scss"]
})
export class RepairPage {
  constructor(
    public navCtrl: NavController,
    public alertController: AlertController
  ) {}

  async gotoRepairalert() {
    var alert = await this.alertController.create({
      header: "요청완료",
      message: "요청이 완료되었습니다.",
      buttons: ["확인"]
    });
    await alert.present();
    var result = await alert.onDidDismiss();
  }

  gotoRepairnotice() {
    this.navCtrl.navigateForward("repairnotice");
  }
}
