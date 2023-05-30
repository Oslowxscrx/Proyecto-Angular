import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';
import { CategoriesComponent } from './categories/categories.component';
import { PagesComponent } from './pages.component';
import { NoPagesFoundComponent } from './no-pages-found/no-pages-found.component';



@NgModule({
  declarations: [
    DashboardComponent,
    ProductsComponent,
    CategoriesComponent,
    PagesComponent,
    NoPagesFoundComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DashboardComponent,
    ProductsComponent,
    CategoriesComponent,
    PagesComponent
  ]
})
export class PagesModule { }
