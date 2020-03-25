import { Component, OnInit } from "@angular/core";
import { AlertController, NavController } from "@ionic/angular";

@Component({
  selector: "app-renteropinion",
  templateUrl: "./renteropinion.page.html",
  styleUrls: ["./renteropinion.page.scss"]
})
export class RenteropinionPage {
  constructor(
    public alertController: AlertController,
    public navCtrl: NavController
  ) {}

  async gotoRenteropinionalert() {
    var alert = await this.alertController.create({
      header: "작성완료",
      message: "작성이 완료되었습니다.",
      buttons: ["확인"]
    });
    await alert.present();
    var result = await alert.onDidDismiss();
  }
  gotoRenteropinionlist() {
    this.navCtrl.navigateForward("renteropinionlist");
  }
}
