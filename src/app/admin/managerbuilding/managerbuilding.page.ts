import { Component, OnInit } from "@angular/core";
import { NavController, ActionSheetController } from "@ionic/angular";

@Component({
  selector: "app-managerbuilding",
  templateUrl: "./managerbuilding.page.html",
  styleUrls: ["./managerbuilding.page.scss"],
})
export class ManagerbuildingPage {
  constructor(
    public navCtrl: NavController,
    public actionSheetController: ActionSheetController
  ) {}

  gotoManagerbuildingdetail() {
    this.navCtrl.navigateForward("managerbuildingdetail");
  }

  async managerbuildingActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: "건물확인하기",
      animated: true,
      backdropDismiss: true,
      mode: "ios",
      buttons: [
        {
          text: "서울특별시 중랑구 겸재로 AA빌라",
          handler: () => {
            console.log("서울시 중랑구 겸재로 AA빌라");
          },
        },
        {
          text: "서울특별시 강동구 천호동 BB아파트",
          handler: () => {
            console.log("서울시 강동구 천호동 BB아파트");
          },
        },
        {
          text: "인천광역시 연수구 국제로 CC아파트",
          handler: () => {
            console.log("인천광역시 연수구 국제로 CC아파트");
          },
        },
      ],
    });
    await actionSheet.present();
  }
}
