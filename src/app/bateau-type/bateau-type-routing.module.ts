import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BateauTypePage } from './bateau-type.page';

const routes: Routes = [
  {
    path: '',
    component: BateauTypePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BateauTypePageRoutingModule {}
