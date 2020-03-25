import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RepairnoticePage } from './repairnotice.page';

const routes: Routes = [
  {
    path: '',
    component: RepairnoticePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RepairnoticePageRoutingModule {}
