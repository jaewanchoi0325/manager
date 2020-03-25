import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RenteropinionlistPageRoutingModule } from './renteropinionlist-routing.module';

import { RenteropinionlistPage } from './renteropinionlist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RenteropinionlistPageRoutingModule
  ],
  declarations: [RenteropinionlistPage]
})
export class RenteropinionlistPageModule {}
