import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChecklistfixbPage } from './checklistfixb.page';

const routes: Routes = [
  {
    path: '',
    component: ChecklistfixbPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChecklistfixbPageRoutingModule {}
