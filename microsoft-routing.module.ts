import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MicrosoftPage } from './microsoft.page';

const routes: Routes = [
  {
    path: '',
    component: MicrosoftPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MicrosoftPageRoutingModule {}
