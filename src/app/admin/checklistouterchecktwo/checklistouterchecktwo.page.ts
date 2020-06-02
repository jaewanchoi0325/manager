import { Component, OnInit } from "@angular/core";
import { NavController, AlertController } from "@ionic/angular";

@Component({
  selector: "app-checklistouterchecktwo",
  templateUrl: "./checklistouterchecktwo.page.html",
  styleUrls: ["./checklistouterchecktwo.page.scss"],
})
export class ChecklistouterchecktwoPage {
  constructor(
    public navCtrl: NavController,
    public alertController: AlertController
  ) {}

  gotoChecklistoutercheckone() {
    this.navCtrl.navigateForward("checklistoutercheckone");
  }

  async gotoChecklistouterchecktwoAlert() {
    var alert = await this.alertController.create({
      header: "작성완료",
      message: "작성이 완료되었습니다",
      buttons: ["확인"],
    });
    await alert.present();
    var result = await alert.onDidDismiss();
    this.navCtrl.navigateForward("checklist");
  }
}
