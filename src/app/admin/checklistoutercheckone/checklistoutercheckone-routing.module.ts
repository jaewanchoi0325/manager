import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ChecklistoutercheckonePage } from "./checklistoutercheckone.page";

const routes: Routes = [
  {
    path: "",
    component: ChecklistoutercheckonePage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChecklistoutercheckonePageRoutingModule {}
