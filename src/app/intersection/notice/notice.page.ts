import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-notice",
  templateUrl: "./notice.page.html",
  styleUrls: ["./notice.page.scss"]
})
export class NoticePage {
  constructor(public navCtrl: NavController) {}

  gotoNoticedetail() {
    this.navCtrl.navigateForward("noticedetail");
  }
}
