import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FindOJTPage } from './find-ojt.page';

const routes: Routes = [
  {
    path: '',
    component: FindOJTPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FindOJTPageRoutingModule {}
