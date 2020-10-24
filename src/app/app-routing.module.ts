import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'page-test',
    loadChildren: () => import('./page-test/page-test.module').then( m => m.PageTestPageModule)
  },
  {
    path: 'poisson',
    loadChildren: () => import('./poisson/poisson.module').then( m => m.PoissonPageModule)
  },
  {
    path: 'contact-thibault',
    loadChildren: () => import('./contact-thibault/contact-thibault.module').then( m => m.ContactThibaultPageModule)
  },
  {
    path: 'magasin',
    loadChildren: () => import('./magasin/magasin.module').then( m => m.MagasinPageModule)
  },
  {
    path: 'produits',
    loadChildren: () => import('./produits/produits.module').then( m => m.ProduitsPageModule)
  },
  {
    path: 'pagetype',
    loadChildren: () => import('./pagetype/pagetype.module').then( m => m.PagetypePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
