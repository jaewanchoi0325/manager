import { Component, OnInit } from "@angular/core";
import { NavController, AlertController } from "@ionic/angular";

@Component({
  selector: "app-checklistinnercheckfive",
  templateUrl: "./checklistinnercheckfive.page.html",
  styleUrls: ["./checklistinnercheckfive.page.scss"],
})
export class ChecklistinnercheckfivePage {
  constructor(
    public navCtrl: NavController,
    public alertController: AlertController
  ) {}

  gotoChecklistinnercheckfour() {
    this.navCtrl.navigateForward("checklistinnercheckfour");
  }

  async gotoChecklistinnercheckfiveAlert() {
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
