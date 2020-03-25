import { Component, OnInit } from "@angular/core";
import { AlertController, NavController } from "@ionic/angular";

@Component({
  selector: "app-signup1",
  templateUrl: "./signup1.page.html",
  styleUrls: ["./signup1.page.scss"]
})
export class Signup1Page {
  constructor(
    public alertController: AlertController,
    public navCtrl: NavController
  ) {}

  async gotoSignUp1Alert() {
    var alert = await this.alertController.create({
      header: "가입완료",
      message: "가입이 완료되었습니다.",
      buttons: ["확인"]
    });
    await alert.present();
    var result = await alert.onDidDismiss();
    this.navCtrl.navigateForward("login1");
  }
}
