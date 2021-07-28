import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MicrosoftPageRoutingModule } from './microsoft-routing.module';

import { MicrosoftPage } from './microsoft.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MicrosoftPageRoutingModule
  ],
  declarations: [MicrosoftPage]
})
export class MicrosoftPageModule {}
