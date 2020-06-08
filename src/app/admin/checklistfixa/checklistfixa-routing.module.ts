import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChecklistfixaPage } from './checklistfixa.page';

const routes: Routes = [
  {
    path: '',
    component: ChecklistfixaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChecklistfixaPageRoutingModule {}
