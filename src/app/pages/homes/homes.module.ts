import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomesPageRoutingModule } from './homes-routing.module';

import { HomesPage } from './homes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomesPageRoutingModule
  ],
  declarations: [HomesPage]
})
export class HomesPageModule {}
