import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Main1PageRoutingModule } from './main1-routing.module';

import { Main1Page } from './main1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Main1PageRoutingModule
  ],
  declarations: [Main1Page]
})
export class Main1PageModule {}
