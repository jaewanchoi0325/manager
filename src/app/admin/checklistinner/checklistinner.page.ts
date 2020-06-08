import { Component, OnInit } from "@angular/core";
import { ActionSheetController, NavController } from "@ionic/angular";
import { PickerController } from "@ionic/angular";
import { PickerOptions } from "@ionic/core";

@Component({
  selector: "app-checklistinner",
  templateUrl: "./checklistinner.page.html",
  styleUrls: ["./checklistinner.page.scss"],
})
export class ChecklistinnerPage {
  constructor(
    public navCtrl: NavController,
    public actionSheetController: ActionSheetController,
    public pickerCtrl: PickerController
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

  frameworkroom = " ";
  async showBasicPickerRoom() {
    let opts: PickerOptions = {
      buttons: [
        {
          text: "취소",
          role: "cancel",
        },
        {
          text: "설정",
        },
      ],
      columns: [
        {
          name: "framework",
          options: [
            { text: "없음", value: "A" },
            { text: "1개", value: "B" },
            { text: "2개", value: "C" },
            { text: "3개", value: "D" },
            { text: "4개", value: "E" },
            { text: "5개", value: "F" },
            { text: "6개", value: "G" },
            { text: "7개", value: "H" },
            { text: "8개", value: "I" },
            { text: "9개", value: "J" },
            { text: "10개", value: "K" },
          ],
        },
      ],
    };
    let picker = await this.pickerCtrl.create(opts);
    picker.present();
    picker.onDidDismiss().then(async (data) => {
      let col = await picker.getColumn("framework");
      console.log("col: ", col);
      this.frameworkroom = col.options[col.selectedIndex].text;
    });
  }

  frameworktoilet = " ";
  async showBasicPickerToilet() {
    let opts: PickerOptions = {
      buttons: [
        {
          text: "취소",
          role: "cancel",
        },
        {
          text: "설정",
        },
      ],
      columns: [
        {
          name: "framework",
          options: [
            { text: "1개", value: "B" },
            { text: "2개", value: "C" },
            { text: "3개", value: "D" },
            { text: "4개", value: "E" },
            { text: "5개", value: "F" },
          ],
        },
      ],
    };
    let picker = await this.pickerCtrl.create(opts);
    picker.present();
    picker.onDidDismiss().then(async (data) => {
      let col = await picker.getColumn("framework");
      console.log("col: ", col);
      this.frameworktoilet = col.options[col.selectedIndex].text;
    });
  }

  frameworkbalcony = " ";
  async showBasicPickerBalcony() {
    let opts: PickerOptions = {
      buttons: [
        {
          text: "취소",
          role: "cancel",
        },
        {
          text: "설정",
        },
      ],
      columns: [
        {
          name: "framework",
          options: [
            { text: "없음", value: "A" },
            { text: "1개", value: "B" },
            { text: "2개", value: "C" },
            { text: "3개", value: "D" },
            { text: "4개", value: "E" },
            { text: "5개", value: "F" },
          ],
        },
      ],
    };
    let picker = await this.pickerCtrl.create(opts);
    picker.present();
    picker.onDidDismiss().then(async (data) => {
      let col = await picker.getColumn("framework");
      console.log("col: ", col);
      this.frameworkbalcony = col.options[col.selectedIndex].text;
    });
  }

  gotoChecklistinnercheckone() {
    this.navCtrl.navigateForward("checklistinnercheckone");
  }
}
