import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './public/login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './public/register/register.module#RegisterPageModule' },
  { path: 'home', loadChildren: './private/home/home.module#HomePageModule' },
  { path: 'tabs', loadChildren: './private/tabs/tabs.module#TabsPageModule' },
  { path: 'offersdetail', loadChildren: './private/offersdetail/offersdetail.module#OffersdetailPageModule' },
  { path: 'components', loadChildren: './private/components/components.module#ComponentsPageModule' },
  { path: 'actionsheet', loadChildren: './private/ioniccomponents/actionsheet/actionsheet.module#ActionsheetPageModule' },
  { path: 'alert', loadChildren: './private/ioniccomponents/alert/alert.module#AlertPageModule' },
  { path: 'badge', loadChildren: './private/ioniccomponents/badge/badge.module#BadgePageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
