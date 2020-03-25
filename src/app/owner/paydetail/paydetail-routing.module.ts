import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaydetailPage } from './paydetail.page';

const routes: Routes = [
  {
    path: '',
    component: PaydetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaydetailPageRoutingModule {}
