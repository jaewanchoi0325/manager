import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChecklistfixPage } from './checklistfix.page';

const routes: Routes = [
  {
    path: '',
    component: ChecklistfixPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChecklistfixPageRoutingModule {}
