import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmacionmensajePage } from './confirmacionmensaje.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmacionmensajePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmacionmensajePageRoutingModule {}
