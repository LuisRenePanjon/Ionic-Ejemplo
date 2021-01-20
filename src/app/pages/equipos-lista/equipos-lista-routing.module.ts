import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EquiposListaPage } from './equipos-lista.page';

const routes: Routes = [
  {
    path: '',
    component: EquiposListaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EquiposListaPageRoutingModule {}
