import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PricepayPage } from './pricepay.page';

const routes: Routes = [
  {
    path: '',
    component: PricepayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PricepayPageRoutingModule {}
