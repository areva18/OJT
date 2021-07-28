import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyOJTPageRoutingModule } from './my-ojt-routing.module';

import { MyOJTPage } from './my-ojt.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyOJTPageRoutingModule
  ],
  declarations: [MyOJTPage]
})
export class MyOJTPageModule {}
