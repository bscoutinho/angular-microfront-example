import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

const routes = [
  {
    loadChildren: () => import('@ng-grill/locations').then((m) => m.LocationsModule),
    path: 'locations',
  },
  {
    loadChildren: () => import('@ng-grill/menu').then((m) => m.MenuModule),
    path: 'menu',
  },
  {
    loadChildren: () => import('@ng-grill/order').then((m) => m.OrderModule),
    path: 'order',
  },
];

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
})
export class AppModule {}
