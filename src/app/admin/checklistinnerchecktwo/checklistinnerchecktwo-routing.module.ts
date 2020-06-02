import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChecklistinnerchecktwoPage } from './checklistinnerchecktwo.page';

const routes: Routes = [
  {
    path: '',
    component: ChecklistinnerchecktwoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChecklistinnerchecktwoPageRoutingModule {}
