import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: "", redirectTo: "start", pathMatch: "full" },
  {
    path: "start",
    loadChildren: () =>
      import("./start/start.module").then((m) => m.StartPageModule),
  },
  {
    path: "signup1",
    loadChildren: () =>
      import("./signup/signup1/signup1.module").then(
        (m) => m.Signup1PageModule
      ),
  },
  {
    path: "signup2",
    loadChildren: () =>
      import("./signup/signup2/signup2.module").then(
        (m) => m.Signup2PageModule
      ),
  },
  {
    path: "signup3",
    loadChildren: () =>
      import("./signup/signup3/signup3.module").then(
        (m) => m.Signup3PageModule
      ),
  },
  {
    path: "login1",
    loadChildren: () =>
      import("./login/login1/login1.module").then((m) => m.Login1PageModule),
  },
  {
    path: "login2",
    loadChildren: () =>
      import("./login/login2/login2.module").then((m) => m.Login2PageModule),
  },
  {
    path: "login3",
    loadChildren: () =>
      import("./login/login3/login3.module").then((m) => m.Login3PageModule),
  },
  {
    path: "main1",
    loadChildren: () =>
      import("./main/main1/main1.module").then((m) => m.Main1PageModule),
  },
  {
    path: "main2",
    loadChildren: () =>
      import("./main/main2/main2.module").then((m) => m.Main2PageModule),
  },
  {
    path: "main3",
    loadChildren: () =>
      import("./main/main3/main3.module").then((m) => m.Main3PageModule),
  },
  {
    path: "managerbuilding",
    loadChildren: () =>
      import("./admin/managerbuilding/managerbuilding.module").then(
        (m) => m.ManagerbuildingPageModule
      ),
  },
  {
    path: "managerbuildingdetail",
    loadChildren: () =>
      import("./admin/managerbuildingdetail/managerbuildingdetail.module").then(
        (m) => m.ManagerbuildingdetailPageModule
      ),
  },
  {
    path: "opinion",
    loadChildren: () =>
      import("./admin/opinion/opinion.module").then((m) => m.OpinionPageModule),
  },
  {
    path: "opiniondetail",
    loadChildren: () =>
      import("./admin/opiniondetail/opiniondetail.module").then(
        (m) => m.OpiniondetailPageModule
      ),
  },
  {
    path: "faq",
    loadChildren: () =>
      import("./intersection/faq/faq.module").then((m) => m.FaqPageModule),
  },
  {
    path: "notice",
    loadChildren: () =>
      import("./intersection/notice/notice.module").then(
        (m) => m.NoticePageModule
      ),
  },
  {
    path: "faqdetail",
    loadChildren: () =>
      import("./intersection/faqdetail/faqdetail.module").then(
        (m) => m.FaqdetailPageModule
      ),
  },
  {
    path: "noticedetail",
    loadChildren: () =>
      import("./intersection/noticedetail/noticedetail.module").then(
        (m) => m.NoticedetailPageModule
      ),
  },
  {
    path: "pay",
    loadChildren: () =>
      import("./owner/pay/pay.module").then((m) => m.PayPageModule),
  },
  {
    path: "paydetail",
    loadChildren: () =>
      import("./owner/paydetail/paydetail.module").then(
        (m) => m.PaydetailPageModule
      ),
  },
  {
    path: "control",
    loadChildren: () =>
      import("./owner/control/control.module").then((m) => m.ControlPageModule),
  },
  {
    path: "controlextend",
    loadChildren: () =>
      import("./owner/controlextend/controlextend.module").then(
        (m) => m.ControlextendPageModule
      ),
  },
  {
    path: "controlremoval",
    loadChildren: () =>
      import("./owner/controlremoval/controlremoval.module").then(
        (m) => m.ControlremovalPageModule
      ),
  },
  {
    path: "controlextenddetail",
    loadChildren: () =>
      import("./owner/controlextenddetail/controlextenddetail.module").then(
        (m) => m.ControlextenddetailPageModule
      ),
  },
  {
    path: "controlremovaldetail",
    loadChildren: () =>
      import("./owner/controlremovaldetail/controlremovaldetail.module").then(
        (m) => m.ControlremovaldetailPageModule
      ),
  },
  {
    path: "repair",
    loadChildren: () =>
      import("./owner/repair/repair.module").then((m) => m.RepairPageModule),
  },
  {
    path: "repairnotice",
    loadChildren: () =>
      import("./owner/repairnotice/repairnotice.module").then(
        (m) => m.RepairnoticePageModule
      ),
  },
  {
    path: "repairnoticedetail",
    loadChildren: () =>
      import("./owner/repairnoticedetail/repairnoticedetail.module").then(
        (m) => m.RepairnoticedetailPageModule
      ),
  },
  {
    path: "price",
    loadChildren: () =>
      import("./renter/price/price.module").then((m) => m.PricePageModule),
  },
  {
    path: "pricedetail",
    loadChildren: () =>
      import("./renter/pricedetail/pricedetail.module").then(
        (m) => m.PricedetailPageModule
      ),
  },
  {
    path: "pricepay",
    loadChildren: () =>
      import("./renter/pricepay/pricepay.module").then(
        (m) => m.PricepayPageModule
      ),
  },
  {
    path: "contract",
    loadChildren: () =>
      import("./renter/contract/contract.module").then(
        (m) => m.ContractPageModule
      ),
  },
  {
    path: "contractview",
    loadChildren: () =>
      import("./renter/contractview/contractview.module").then(
        (m) => m.ContractviewPageModule
      ),
  },
  {
    path: "contractextension",
    loadChildren: () =>
      import("./renter/contractextension/contractextension.module").then(
        (m) => m.ContractextensionPageModule
      ),
  },
  {
    path: "contractremoval",
    loadChildren: () =>
      import("./renter/contractremoval/contractremoval.module").then(
        (m) => m.ContractremovalPageModule
      ),
  },
  {
    path: "renteropinion",
    loadChildren: () =>
      import("./renter/renteropinion/renteropinion.module").then(
        (m) => m.RenteropinionPageModule
      ),
  },
  {
    path: "trash",
    loadChildren: () =>
      import("./renter/trash/trash.module").then((m) => m.TrashPageModule),
  },
  {
    path: "trashlist",
    loadChildren: () =>
      import("./renter/trashlist/trashlist.module").then(
        (m) => m.TrashlistPageModule
      ),
  },
  {
    path: "trashdetail",
    loadChildren: () =>
      import("./renter/trashdetail/trashdetail.module").then(
        (m) => m.TrashdetailPageModule
      ),
  },
  {
    path: "renteropinionlist",
    loadChildren: () =>
      import("./renter/renteropinionlist/renteropinionlist.module").then(
        (m) => m.RenteropinionlistPageModule
      ),
  },
  {
    path: "renteropiniondetail",
    loadChildren: () =>
      import("./renter/renteropiniondetail/renteropiniondetail.module").then(
        (m) => m.RenteropiniondetailPageModule
      ),
  },
  {
    path: "delivery",
    loadChildren: () =>
      import("./renter/delivery/delivery.module").then(
        (m) => m.DeliveryPageModule
      ),
  },
  {
    path: "deliverydetail",
    loadChildren: () =>
      import("./renter/deliverydetail/deliverydetail.module").then(
        (m) => m.DeliverydetailPageModule
      ),
  },
  {
    path: "parking",
    loadChildren: () =>
      import("./renter/parking/parking.module").then(
        (m) => m.ParkingPageModule
      ),
  },
  {
    path: "parkingregister",
    loadChildren: () =>
      import("./renter/parkingregister/parkingregister.module").then(
        (m) => m.ParkingregisterPageModule
      ),
  },
  {
    path: "parkingvisitlist",
    loadChildren: () =>
      import("./renter/parkingvisitlist/parkingvisitlist.module").then(
        (m) => m.ParkingvisitlistPageModule
      ),
  },
  {
    path: "parkingvisitlistdetail",
    loadChildren: () =>
      import(
        "./renter/parkingvisitlistdetail/parkingvisitlistdetail.module"
      ).then((m) => m.ParkingvisitlistdetailPageModule),
  },
  {
    path: "parkingvisitregister",
    loadChildren: () =>
      import("./renter/parkingvisitregister/parkingvisitregister.module").then(
        (m) => m.ParkingvisitregisterPageModule
      ),
  },
  {
    path: "market",
    loadChildren: () =>
      import("./renter/market/market.module").then((m) => m.MarketPageModule),
  },
  {
    path: "marketsell",
    loadChildren: () =>
      import("./renter/marketsell/marketsell.module").then(
        (m) => m.MarketsellPageModule
      ),
  },
  {
    path: "marketbuy",
    loadChildren: () =>
      import("./renter/marketbuy/marketbuy.module").then(
        (m) => m.MarketbuyPageModule
      ),
  },
  {
    path: "owneropinion",
    loadChildren: () =>
      import("./owner/owneropinion/owneropinion.module").then(
        (m) => m.OwneropinionPageModule
      ),
  },
  {
    path: "owneropiniondetail",
    loadChildren: () =>
      import("./owner/owneropiniondetail/owneropiniondetail.module").then(
        (m) => m.OwneropiniondetailPageModule
      ),
  },
  {
    path: "estimate",
    loadChildren: () =>
      import("./admin/estimate/estimate.module").then(
        (m) => m.EstimatePageModule
      ),
  },
  {
    path: "trashchecklist",
    loadChildren: () =>
      import("./admin/trashchecklist/trashchecklist.module").then(
        (m) => m.TrashchecklistPageModule
      ),
  },
  {
    path: "estimatelist",
    loadChildren: () =>
      import("./admin/estimatelist/estimatelist.module").then(
        (m) => m.EstimatelistPageModule
      ),
  },
  {
    path: "estimatelistdetail",
    loadChildren: () =>
      import("./admin/estimatelistdetail/estimatelistdetail.module").then(
        (m) => m.EstimatelistdetailPageModule
      ),
  },
  {
    path: "checklist",
    loadChildren: () =>
      import("./admin/checklist/checklist.module").then(
        (m) => m.ChecklistPageModule
      ),
  },
  {
    path: "checklistouter",
    loadChildren: () =>
      import("./admin/checklistouter/checklistouter.module").then(
        (m) => m.ChecklistouterPageModule
      ),
  },

  {
    path: "checklistoutercheckone",
    loadChildren: () =>
      import(
        "./admin/checklistoutercheckone/checklistoutercheckone.module"
      ).then((m) => m.ChecklistoutercheckonePageModule),
  },
  {
    path: "checklistouterchecktwo",
    loadChildren: () =>
      import(
        "./admin/checklistouterchecktwo/checklistouterchecktwo.module"
      ).then((m) => m.ChecklistouterchecktwoPageModule),
  },
  {
    path: "checklistinner",
    loadChildren: () =>
      import("./admin/checklistinner/checklistinner.module").then(
        (m) => m.ChecklistinnerPageModule
      ),
  },
  {
    path: "checklistinnercheckone",
    loadChildren: () =>
      import(
        "./admin/checklistinnercheckone/checklistinnercheckone.module"
      ).then((m) => m.ChecklistinnercheckonePageModule),
  },
  {
    path: "checklistinnerchecktwo",
    loadChildren: () =>
      import(
        "./admin/checklistinnerchecktwo/checklistinnerchecktwo.module"
      ).then((m) => m.ChecklistinnerchecktwoPageModule),
  },
  {
    path: "checklistinnercheckthree",
    loadChildren: () =>
      import(
        "./admin/checklistinnercheckthree/checklistinnercheckthree.module"
      ).then((m) => m.ChecklistinnercheckthreePageModule),
  },
  {
    path: "checklistinnercheckfour",
    loadChildren: () =>
      import(
        "./admin/checklistinnercheckfour/checklistinnercheckfour.module"
      ).then((m) => m.ChecklistinnercheckfourPageModule),
  },
  {
    path: "checklistinnercheckfive",
    loadChildren: () =>
      import(
        "./admin/checklistinnercheckfive/checklistinnercheckfive.module"
      ).then((m) => m.ChecklistinnercheckfivePageModule),
  },
  {
    path: "checklistfix",
    loadChildren: () =>
      import("./admin/checklistfix/checklistfix.module").then(
        (m) => m.ChecklistfixPageModule
      ),
  },
  {
    path: "checklistfixa",
    loadChildren: () =>
      import("./admin/checklistfixa/checklistfixa.module").then(
        (m) => m.ChecklistfixaPageModule
      ),
  },
  {
    path: "checklistfixb",
    loadChildren: () =>
      import("./admin/checklistfixb/checklistfixb.module").then(
        (m) => m.ChecklistfixbPageModule
      ),
  },
  {
    path: "registerowner",
    loadChildren: () =>
      import("./admin/registerowner/registerowner.module").then(
        (m) => m.RegisterownerPageModule
      ),
  },
  {
    path: "adminowner",
    loadChildren: () =>
      import("./admin/adminowner/adminowner.module").then(
        (m) => m.AdminownerPageModule
      ),
  },
  {
    path: "address",
    loadChildren: () =>
      import("./admin/address/address.module").then((m) => m.AddressPageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
