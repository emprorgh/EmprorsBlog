import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductComponent } from './products/product/product.component';
import { ProductsComponent } from './products/products.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BatchrunComponent } from './batchrun/batchrun.component';
import { ToolsComponent } from './tools/tools.component';


const routes: Routes = [
  
      { path: 'product-list', component: ProductListComponent},  
      {path: 'dashboard', component: DashboardComponent},  
      {path: "batchrun" , component:BatchrunComponent},
      {path:"product", component:ProductComponent},
      {path:"tools", component:ToolsComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
