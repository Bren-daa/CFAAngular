import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecettesTypePageRoutingModule } from './recettes-type-routing.module';

import { RecettesTypePage } from './recettes-type.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecettesTypePageRoutingModule
  ],
  declarations: [RecettesTypePage]
})
export class RecettesTypePageModule {}
