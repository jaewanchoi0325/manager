import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParkingvisitlistPage } from './parkingvisitlist.page';

const routes: Routes = [
  {
    path: '',
    component: ParkingvisitlistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParkingvisitlistPageRoutingModule {}
