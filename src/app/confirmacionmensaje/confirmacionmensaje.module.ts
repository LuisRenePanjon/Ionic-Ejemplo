import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmacionmensajePageRoutingModule } from './confirmacionmensaje-routing.module';

import { ConfirmacionmensajePage } from './confirmacionmensaje.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmacionmensajePageRoutingModule
  ],
  declarations: [ConfirmacionmensajePage]
})
export class ConfirmacionmensajePageModule {}
