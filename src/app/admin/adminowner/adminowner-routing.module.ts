import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminownerPage } from './adminowner.page';

const routes: Routes = [
  {
    path: '',
    component: AdminownerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminownerPageRoutingModule {}
