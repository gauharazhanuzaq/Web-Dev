import { ApplicationConfig } from '@angular/core';
import { provideRouter, Route } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Route[] = [
  { path: '', component: ProductsComponent }
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes)
  ]
};
