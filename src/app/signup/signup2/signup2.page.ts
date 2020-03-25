import { Component, OnInit } from "@angular/core";
import { AlertController, NavController } from "@ionic/angular";

@Component({
  selector: "app-signup2",
  templateUrl: "./signup2.page.html",
  styleUrls: ["./signup2.page.scss"]
})
export class Signup2Page {
  constructor(
    public alertController: AlertController,
    public navCtrl: NavController
  ) {}

  async gotoSignUp2Alert() {
    var alert = await this.alertController.create({
      header: "가입완료",
      message: "가입이 완료되었습니다.",
      buttons: ["확인"]
    });
    await alert.present();
    var result = await alert.onDidDismiss();
    this.navCtrl.navigateForward("login2");
  }
}
