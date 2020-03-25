import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RenteropinionPageRoutingModule } from './renteropinion-routing.module';

import { RenteropinionPage } from './renteropinion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RenteropinionPageRoutingModule
  ],
  declarations: [RenteropinionPage]
})
export class RenteropinionPageModule {}
