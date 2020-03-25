import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Main3Page } from './main3.page';

const routes: Routes = [
  {
    path: '',
    component: Main3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Main3PageRoutingModule {}
