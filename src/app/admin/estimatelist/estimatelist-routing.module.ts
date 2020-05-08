import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EstimatelistPage } from './estimatelist.page';

const routes: Routes = [
  {
    path: '',
    component: EstimatelistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EstimatelistPageRoutingModule {}
