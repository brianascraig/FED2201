import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { SingleProductPageComponent } from '../pages/single-product-page/single-product-page.component';
import { ShopMainComponent } from '../pages/shop-main/shop-main.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'product/:id', component: SingleProductPageComponent },
  { path: 'browse', component: ShopMainComponent },
  { path: 'browse/:category', component: ShopMainComponent }

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
