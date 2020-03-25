import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OpiniondetailPageRoutingModule } from './opiniondetail-routing.module';

import { OpiniondetailPage } from './opiniondetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OpiniondetailPageRoutingModule
  ],
  declarations: [OpiniondetailPage]
})
export class OpiniondetailPageModule {}
