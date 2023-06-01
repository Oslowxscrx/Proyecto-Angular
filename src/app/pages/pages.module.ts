import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';
import { CategoriesComponent } from './categories/categories.component';
import { PagesComponent } from './pages.component';
import { NoPagesFoundComponent } from './no-pages-found/no-pages-found.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    DashboardComponent,
    ProductsComponent,
    CategoriesComponent,
    PagesComponent,
    NoPagesFoundComponent
  ],
  imports: [

    SharedModule,
    RouterModule
  ],
  exports: [
    DashboardComponent,
    ProductsComponent,
    CategoriesComponent,
    PagesComponent
  ]
})
export class PagesModule { }
