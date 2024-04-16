import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./features/home-page/home-page.module').then(m => m.HomePageModule) },
  {
    path: 'manage',
    loadChildren: () => import('./features/admin-page/admin-page.module').then(m => m.AdminPageModule),
  },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
