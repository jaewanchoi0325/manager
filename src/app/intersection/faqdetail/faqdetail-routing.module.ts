import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FaqdetailPage } from './faqdetail.page';

const routes: Routes = [
  {
    path: '',
    component: FaqdetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FaqdetailPageRoutingModule {}
