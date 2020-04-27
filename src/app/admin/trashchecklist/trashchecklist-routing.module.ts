import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { TrashchecklistPage } from "./trashchecklist.page";

const routes: Routes = [
  {
    path: "",
    component: TrashchecklistPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrashchecklistPageRoutingModule {}
