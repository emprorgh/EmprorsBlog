import { Component, OnInit } from '@angular/core';
import {ProductService} from '../shared/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  public products = [];

  constructor(private productService : ProductService) { }

  ngOnInit() {
    this.productService.getProducts()
        .subscribe(data => this.products = data);
  }

}
