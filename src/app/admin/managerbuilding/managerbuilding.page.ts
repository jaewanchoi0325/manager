import { Component, OnInit } from "@angular/core";
import { NavController, ActionSheetController } from "@ionic/angular";
import { IonicSelectableComponent } from "ionic-selectable";
import { PickerController } from "@ionic/angular";
import { PortService } from "src/app/service/port.service";
import { Country, Port } from "../../types";

@Component({
  selector: "app-managerbuilding",
  templateUrl: "./managerbuilding.page.html",
  styleUrls: ["./managerbuilding.page.scss"],
})
export class ManagerbuildingPage implements OnInit {
  ports: Port[];
  countries: Country[];
  country: Country;
  port: Port;

  constructor(
    public navCtrl: NavController,
    public actionSheetController: ActionSheetController,
    public dataPicker: PickerController,
    private portService: PortService
  ) {}

  ngOnInit() {
    this.countries = this.portService.getCountries();
  }

  countryChange(event: {
    component: IonicSelectableComponent;
    value: Country;
  }) {
    if (event.value) {
      this.ports = this.portService.getPorts().filter((port) => {
        return port.country.id === event.value.id;
      });
    } else {
      this.ports = [];
      this.port = null;
    }
  }
  gotoManagerbuildingdetail() {
    this.navCtrl.navigateForward("managerbuildingdetail");
  }
}
//액션시트
// async managerbuildingActionSheet() {
//   const actionSheet = await this.actionSheetController.create({
//     header: "건물 찾기",
//     animated: true,
//     backdropDismiss: true,
//     mode: "ios",
//     buttons: [
//       {
//         text: "서울특별시 중랑구 겸재로 AA빌라",
//         handler: () => {
//           console.log("서울시 중랑구 겸재로 AA빌라");
//         },
//       },
//       {
//         text: "서울특별시 강동구 성내로 BB오피스텔",
//         handler: () => {
//           console.log("서울시 강동구 성내로 BB오피스텔");
//         },
//       },
//       {
//         text: "서울특별시 종로구 경희궁1가 CC오피스텔",
//         handler: () => {
//           console.log("서울시 강동구 성내로 CC오피스텔");
//         },
//       },
//       {
//         text: "인천광역시 연수구 국제로 DD아파트",
//         handler: () => {
//           console.log("인천광역시 연수구 국제로 DD아파트");
//         },
//       },
//     ],
//   });
//   await actionSheet.present();
// }
