import { Component, OnInit } from "@angular/core";
import { AlertController, NavController } from "@ionic/angular";

@Component({
  selector: "app-parkingvisitregister",
  templateUrl: "./parkingvisitregister.page.html",
  styleUrls: ["./parkingvisitregister.page.scss"]
})
export class ParkingvisitregisterPage {
  constructor(
    public alertController: AlertController,
    public navCtrl: NavController
  ) {}

  async gotoParkingvisitdetailalert() {
    var alert = await this.alertController.create({
      header: "등록완료",
      message: "등록이 완료되었습니다.",
      buttons: ["확인"]
    });
    await alert.present();
    var result = await alert.onDidDismiss();
    this.navCtrl.navigateForward("parking");
  }
}
