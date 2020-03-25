import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrashlistPage } from './trashlist.page';

const routes: Routes = [
  {
    path: '',
    component: TrashlistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrashlistPageRoutingModule {}
