import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BateauTypePageRoutingModule } from './bateau-type-routing.module';

import { BateauTypePage } from './bateau-type.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BateauTypePageRoutingModule
  ],
  declarations: [BateauTypePage]
})
export class BateauTypePageModule {}
