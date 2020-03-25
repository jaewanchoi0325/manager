import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RenteropinionPage } from './renteropinion.page';

const routes: Routes = [
  {
    path: '',
    component: RenteropinionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RenteropinionPageRoutingModule {}
