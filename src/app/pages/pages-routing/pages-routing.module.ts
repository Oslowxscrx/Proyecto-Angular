import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes} from '@angular/router';

import { PagesComponent } from 'src/app/pages/pages.component';
import { DashboardComponent } from 'src/app/pages/dashboard/dashboard.component';
import { ProductsComponent } from 'src/app/pages/products/products.component';
import { CategoriesComponent } from 'src/app/pages/categories/categories.component';
import { NoPagesFoundComponent } from 'src/app/pages/no-pages-found/no-pages-found.component';



const routes: Routes = [
  // rutas protegidas
  {path: '', component:PagesComponent,
  children:[
    {path: 'dashboard', component:DashboardComponent},
    {path: 'product', component:ProductsComponent},
    {path: 'category', component:CategoriesComponent}
  ]},
//  {path: '', redirectTo:'/dashboard', pathMatch: 'full'},
   {path: '**', component:NoPagesFoundComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
