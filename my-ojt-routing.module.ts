import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyOJTPage } from './my-ojt.page';

const routes: Routes = [
  {
    path: '',
    component: MyOJTPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyOJTPageRoutingModule {}
