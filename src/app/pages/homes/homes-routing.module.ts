import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomesPage } from './homes.page';

const routes: Routes = [
  {
    path: '',
    component: HomesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomesPageRoutingModule {}
