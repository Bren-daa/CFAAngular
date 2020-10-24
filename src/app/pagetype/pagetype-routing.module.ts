import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagetypePage } from './pagetype.page';

const routes: Routes = [
  {
    path: '',
    component: PagetypePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagetypePageRoutingModule {}
