import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChecklistinnercheckfivePage } from './checklistinnercheckfive.page';

const routes: Routes = [
  {
    path: '',
    component: ChecklistinnercheckfivePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChecklistinnercheckfivePageRoutingModule {}
