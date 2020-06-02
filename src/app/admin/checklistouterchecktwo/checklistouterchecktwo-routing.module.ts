import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ChecklistouterchecktwoPage } from "./checklistouterchecktwo.page";

const routes: Routes = [
  {
    path: "",
    component: ChecklistouterchecktwoPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChecklistouterchecktwoPageRoutingModule {}
