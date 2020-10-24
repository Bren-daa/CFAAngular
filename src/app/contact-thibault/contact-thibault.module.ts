import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContactThibaultPageRoutingModule } from './contact-thibault-routing.module';

import { ContactThibaultPage } from './contact-thibault.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContactThibaultPageRoutingModule
  ],
  declarations: [ContactThibaultPage]
})
export class ContactThibaultPageModule {}
