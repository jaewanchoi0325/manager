import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { ChecklistfixPageRoutingModule } from "./checklistfix-routing.module";

import { ChecklistfixPage } from "./checklistfix.page";
import { Routes } from "@angular/router";

const route: Routes = [
  {
    path: "checklistfix",
    component: ChecklistfixPage,
    children: [
      {
        path: "checklistfixa",
        loadChildren: "./admin/checklistfixa/checklistfixa.module",
      },
      {
        path: "checklistfixb",
        loadChildren: "./admin/checklistfixb/checklistfixb.module",
      },
    ],
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChecklistfixPageRoutingModule,
  ],
  declarations: [ChecklistfixPage],
})
export class ChecklistfixPageModule {}
