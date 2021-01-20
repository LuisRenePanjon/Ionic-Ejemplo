import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EquiposListaPageRoutingModule } from './equipos-lista-routing.module';

import { EquiposListaPage } from './equipos-lista.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EquiposListaPageRoutingModule
  ],
  declarations: [EquiposListaPage]
})
export class EquiposListaPageModule {}
