import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManagerbuildingPage } from './managerbuilding.page';

const routes: Routes = [
  {
    path: '',
    component: ManagerbuildingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManagerbuildingPageRoutingModule {}
