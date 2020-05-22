import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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

@NgModule({
  declarations: [
    AppComponent,
    MainNavbarComponent,
    ProductsComponent,
    ProductComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgGridModule.withComponents([]),
    NgbModule,
    HttpClientModule

  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
