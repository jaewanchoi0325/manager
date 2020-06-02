import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChecklistinnercheckfourPage } from './checklistinnercheckfour.page';

const routes: Routes = [
  {
    path: '',
    component: ChecklistinnercheckfourPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChecklistinnercheckfourPageRoutingModule {}
