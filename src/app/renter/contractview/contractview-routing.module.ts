import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContractviewPage } from './contractview.page';

const routes: Routes = [
  {
    path: '',
    component: ContractviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContractviewPageRoutingModule {}
