import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FindOJTPageRoutingModule } from './find-ojt-routing.module';

import { FindOJTPage } from './find-ojt.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FindOJTPageRoutingModule
  ],
  declarations: [FindOJTPage]
})
export class FindOJTPageModule {}
