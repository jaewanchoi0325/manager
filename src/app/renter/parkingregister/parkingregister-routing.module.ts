import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParkingregisterPage } from './parkingregister.page';

const routes: Routes = [
  {
    path: '',
    component: ParkingregisterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParkingregisterPageRoutingModule {}
