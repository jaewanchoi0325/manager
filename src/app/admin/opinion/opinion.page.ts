import { Component, OnInit } from "@angular/core";
import { NavController, ActionSheetController } from "@ionic/angular";

@Component({
  selector: "app-opinion",
  templateUrl: "./opinion.page.html",
  styleUrls: ["./opinion.page.scss"],
})
export class OpinionPage {
  constructor(
    public navCtrl: NavController,
    public actionSheetController: ActionSheetController
  ) {}

  gotoOpiniondetail() {
    this.navCtrl.navigateForward("opiniondetail");
  }

  async opinionActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: "민원내역 확인하기",
      animated: true,
      backdropDismiss: true,
      mode: "ios",
      buttons: [
        {
          text: "접수중인 민원",
          handler: () => {
            console.log("접수중인 민원");
          },
        },
        {
          text: "접수완료인 민원",
          handler: () => {
            console.log("접수완료인 민원");
          },
        },
        {
          text: "처리중인 민원",
          handler: () => {
            console.log("처리중인 민원");
          },
        },
        {
          text: "처리완료인 민원",
          handler: () => {
            console.log("처리완료인 민원");
          },
        },
      ],
    });
    await actionSheet.present();
  }
}
