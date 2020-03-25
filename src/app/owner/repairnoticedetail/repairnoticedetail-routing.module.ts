import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RepairnoticedetailPage } from './repairnoticedetail.page';

const routes: Routes = [
  {
    path: '',
    component: RepairnoticedetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RepairnoticedetailPageRoutingModule {}
