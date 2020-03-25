import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrashdetailPage } from './trashdetail.page';

const routes: Routes = [
  {
    path: '',
    component: TrashdetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrashdetailPageRoutingModule {}
