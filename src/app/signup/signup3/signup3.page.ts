import { Component, OnInit } from "@angular/core";
import { AlertController, NavController } from "@ionic/angular";

@Component({
  selector: "app-signup3",
  templateUrl: "./signup3.page.html",
  styleUrls: ["./signup3.page.scss"]
})
export class Signup3Page {
  constructor(
    public alertController: AlertController,
    public navCtrl: NavController
  ) {}

  async gotoSignUp3Alert() {
    var alert = await this.alertController.create({
      header: "가입완료",
      message: "가입이 완료되었습니다.",
      buttons: ["확인"]
    });
    await alert.present();
    var result = await alert.onDidDismiss();
    this.navCtrl.navigateForward("login3");
  }
}
