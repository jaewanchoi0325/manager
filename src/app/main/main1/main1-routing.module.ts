import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Main1Page } from './main1.page';

const routes: Routes = [
  {
    path: '',
    component: Main1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Main1PageRoutingModule {}
