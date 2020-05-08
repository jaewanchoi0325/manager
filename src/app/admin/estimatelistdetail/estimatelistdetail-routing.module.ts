import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EstimatelistdetailPage } from './estimatelistdetail.page';

const routes: Routes = [
  {
    path: '',
    component: EstimatelistdetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EstimatelistdetailPageRoutingModule {}
