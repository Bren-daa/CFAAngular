import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PagetypePageRoutingModule } from './pagetype-routing.module';

import { PagetypePage } from './pagetype.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PagetypePageRoutingModule
  ],
  declarations: [PagetypePage]
})
export class PagetypePageModule {}
