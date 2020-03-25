import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Main2PageRoutingModule } from './main2-routing.module';

import { Main2Page } from './main2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Main2PageRoutingModule
  ],
  declarations: [Main2Page]
})
export class Main2PageModule {}
