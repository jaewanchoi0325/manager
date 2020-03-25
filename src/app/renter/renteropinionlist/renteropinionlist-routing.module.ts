import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RenteropinionlistPage } from './renteropinionlist.page';

const routes: Routes = [
  {
    path: '',
    component: RenteropinionlistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RenteropinionlistPageRoutingModule {}
