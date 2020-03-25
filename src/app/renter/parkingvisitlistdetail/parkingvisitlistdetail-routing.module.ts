import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParkingvisitlistdetailPage } from './parkingvisitlistdetail.page';

const routes: Routes = [
  {
    path: '',
    component: ParkingvisitlistdetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParkingvisitlistdetailPageRoutingModule {}
