import { Injectable } from '@angular/core';
import {Product} from './product.model'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private _url: string = "/assets/products.json";

  selectedProduct : Product;
  constructor(private http : HttpClient) { }

  getProducts() : Observable<Product[]>{
    return this.http.get<Product[]>(this._url);
  }

}
