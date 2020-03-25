import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RenteropiniondetailPage } from './renteropiniondetail.page';

const routes: Routes = [
  {
    path: '',
    component: RenteropiniondetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RenteropiniondetailPageRoutingModule {}
