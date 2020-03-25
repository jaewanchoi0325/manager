import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParkingvisitregisterPage } from './parkingvisitregister.page';

const routes: Routes = [
  {
    path: '',
    component: ParkingvisitregisterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParkingvisitregisterPageRoutingModule {}
