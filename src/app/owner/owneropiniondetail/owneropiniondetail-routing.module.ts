import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OwneropiniondetailPage } from './owneropiniondetail.page';

const routes: Routes = [
  {
    path: '',
    component: OwneropiniondetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OwneropiniondetailPageRoutingModule {}
