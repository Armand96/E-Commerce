import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DaftarPageRoutingModule } from './daftar-routing.module';

import { DaftarPage } from './daftar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,
    IonicModule,
    DaftarPageRoutingModule
  ],
  declarations: [DaftarPage]
})
export class DaftarPageModule {}
