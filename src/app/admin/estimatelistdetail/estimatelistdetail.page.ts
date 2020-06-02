import { Component } from "@angular/core";
import { ActionSheetController } from "@ionic/angular";

@Component({
  selector: "app-estimatelistdetail",
  templateUrl: "./estimatelistdetail.page.html",
  styleUrls: ["./estimatelistdetail.page.scss"],
})
export class EstimatelistdetailPage {
  customPickerOptions: any;
  constructor() {
    this.customPickerOptions = {
      buttons: [
        {
          text: "1111",
          handler: () => console.log("Clicked Save!"),
        },
        {
          text: "Log",
          handler: () => {
            console.log("Clicked Log. Do not Dismiss.");
            return false;
          },
        },
      ],
    };
  }
}
