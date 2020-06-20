import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AgGridModule} from 'ag-grid-angular';
import { MainNavbarComponent } from './main-navbar/main-navbar.component';
import {NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './products/product/product.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import {HttpClientModule} from '@angular/common/http';
import { ProductService } from './products/shared/product.service';
import {RouterModule} from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BatchrunComponent } from './batchrun/batchrun.component';
import { ToolsComponent } from './tools/tools.component';


@NgModule({
  declarations: [
    AppComponent,
    MainNavbarComponent,
    ProductsComponent,
    ProductComponent,
    ProductListComponent,
    DashboardComponent,
    BatchrunComponent,
    ToolsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgGridModule.withComponents([]),
    NgbModule,
    HttpClientModule,
    RouterModule.forRoot([]),
    ChartsModule,
    FormsModule
    

  ],
  providers: [
    ProductService
    
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
