import { Component, OnInit } from "@angular/core";
import { ActionSheetController, NavController } from "@ionic/angular";

@Component({
  selector: "app-checklistinner",
  templateUrl: "./checklistinner.page.html",
  styleUrls: ["./checklistinner.page.scss"],
})
export class ChecklistinnerPage {
  constructor(
    public navCtrl: NavController,
    public actionSheetController: ActionSheetController
  ) {}

  async checklistinnerActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: "점검 건물 설정",
      animated: true,
      backdropDismiss: true,
      mode: "ios",
      buttons: [
        {
          text: "서울시 중랑구 겸재로 AA빌라",
          handler: () => {
            console.log("서울시 중랑구 겸재로 AA빌라");
          },
        },
        {
          text: "서울시 강동구 올림픽로80번길 BB빌라",
          handler: () => {
            console.log("서울시 강동구 올림픽로80번길 BB빌라");
          },
        },
      ],
    });
    await actionSheet.present();
  }

  gotoChecklistinnercheckone() {
    this.navCtrl.navigateForward("checklistinnercheckone");
  }
}
