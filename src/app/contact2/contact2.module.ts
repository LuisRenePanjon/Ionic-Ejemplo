import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Contact2PageRoutingModule } from './contact2-routing.module';

import { Contact2Page } from './contact2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Contact2PageRoutingModule
  ],
  declarations: [Contact2Page]
})
export class Contact2PageModule {}
