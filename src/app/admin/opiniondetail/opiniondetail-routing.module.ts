import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OpiniondetailPage } from './opiniondetail.page';

const routes: Routes = [
  {
    path: '',
    component: OpiniondetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OpiniondetailPageRoutingModule {}
