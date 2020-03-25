import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NoticedetailPageRoutingModule } from './noticedetail-routing.module';

import { NoticedetailPage } from './noticedetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NoticedetailPageRoutingModule
  ],
  declarations: [NoticedetailPage]
})
export class NoticedetailPageModule {}
