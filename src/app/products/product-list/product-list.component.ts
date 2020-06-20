import { Component, OnInit } from '@angular/core';
import {ProductService} from '../shared/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  public products = [];
  public productsHeader = [
    { headerName: 'Product ID', field: 'ProductID', filter: true, resizable:true },
    { headerName: 'Application Name', field: 'Product1' },
    { headerName: 'Web address', field: 'QA_URL'},
    { headerName: 'Product Description', field: 'ProdDescription' },
    { headerName: 'Notes', field: 'Notes' },
    { headerName: 'Created Date', field: 'CreateDate' },
    { headerName: 'Report Path', field: 'ReportPath' }

  ];

  constructor(private productService : ProductService) { }

  ngOnInit() {
    this.productService.getProducts()
        .subscribe(data => this.products = data);
  }

}
