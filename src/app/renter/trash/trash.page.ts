import { Component, OnInit } from "@angular/core";
import { AlertController, NavController } from "@ionic/angular";

@Component({
  selector: "app-trash",
  templateUrl: "./trash.page.html",
  styleUrls: ["./trash.page.scss"]
})
export class TrashPage {
  constructor(
    public alertController: AlertController,
    public navCtrl: NavController
  ) {}

  async gotoTrashalert() {
    var alert = await this.alertController.create({
      header: "신청완료",
      message: "작성이 완료되었습니다.",
      buttons: ["확인"]
    });
    await alert.present();
    var result = await alert.onDidDismiss();
  }

  gotoTrashlist() {
    this.navCtrl.navigateForward("trashlist");
  }
}
