import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Main3PageRoutingModule } from './main3-routing.module';

import { Main3Page } from './main3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Main3PageRoutingModule
  ],
  declarations: [Main3Page]
})
export class Main3PageModule {}
