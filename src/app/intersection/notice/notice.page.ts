import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";
import { ActionSheetController } from "@ionic/angular";

@Component({
  selector: "app-notice",
  templateUrl: "./notice.page.html",
  styleUrls: ["./notice.page.scss"],
})
export class NoticePage {
  constructor(
    public navCtrl: NavController,
    public actionSheetController: ActionSheetController
  ) {}

  gotoNoticedetail() {
    this.navCtrl.navigateForward("noticedetail");
  }

  async noticeActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: "사용자 설정",
      animated: true,
      backdropDismiss: true,
      mode: "ios",
      buttons: [
        {
          text: "전체보기",
          handler: () => {
            console.log("전체보기");
          },
        },
        {
          text: "임대인",
          handler: () => {
            console.log("임대인");
          },
        },
        {
          text: "임차인",
          handler: () => {
            console.log("임차인");
          },
        },
        {
          text: "관리자",
          handler: () => {
            console.log("관리자");
          },
        },
      ],
    });
    await actionSheet.present();
  }
}
