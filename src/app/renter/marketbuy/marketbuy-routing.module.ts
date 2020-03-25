import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MarketbuyPage } from './marketbuy.page';

const routes: Routes = [
  {
    path: '',
    component: MarketbuyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MarketbuyPageRoutingModule {}
