import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MarketsellPage } from './marketsell.page';

const routes: Routes = [
  {
    path: '',
    component: MarketsellPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MarketsellPageRoutingModule {}
