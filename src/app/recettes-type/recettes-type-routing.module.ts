import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecettesTypePage } from './recettes-type.page';

const routes: Routes = [
  {
    path: '',
    component: RecettesTypePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecettesTypePageRoutingModule {}
