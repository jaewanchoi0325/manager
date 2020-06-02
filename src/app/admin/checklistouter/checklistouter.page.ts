import { Component, OnInit } from "@angular/core";
import { ActionSheetController, NavController } from "@ionic/angular";

@Component({
  selector: "app-checklistouter",
  templateUrl: "./checklistouter.page.html",
  styleUrls: ["./checklistouter.page.scss"],
})
export class ChecklistouterPage {
  constructor(
    public actionSheetController: ActionSheetController,
    public navCtrl: NavController
  ) {}

  gotoChecklistoutercheckone() {
    this.navCtrl.navigateForward("checklistoutercheckone");
  }

  async checklistouterActionSheet() {
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
}
