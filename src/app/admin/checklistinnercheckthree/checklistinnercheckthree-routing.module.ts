import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChecklistinnercheckthreePage } from './checklistinnercheckthree.page';

const routes: Routes = [
  {
    path: '',
    component: ChecklistinnercheckthreePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChecklistinnercheckthreePageRoutingModule {}
