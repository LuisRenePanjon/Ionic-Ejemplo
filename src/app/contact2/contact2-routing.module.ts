import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Contact2Page } from './contact2.page';

const routes: Routes = [
  {
    path: '',
    component: Contact2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Contact2PageRoutingModule {}
