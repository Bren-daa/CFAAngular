import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactThibaultPage } from './contact-thibault.page';

const routes: Routes = [
  {
    path: '',
    component: ContactThibaultPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactThibaultPageRoutingModule {}
