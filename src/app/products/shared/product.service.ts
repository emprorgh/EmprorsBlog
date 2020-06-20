import { Injectable } from '@angular/core';
import {Product} from './product.model'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  //private _url: string = "/assets/products.json";
  private _url: string = "https://localhost:44366/api/Products";
  formData : Product;
  constructor(private http : HttpClient) { }

  getProducts() : Observable<Product[]>{  
    return this.http.get<Product[]>(this._url);
  }

  postProduct(product : Product) : Observable<Product>{   
      return this.http.post<any>(this._url, product, {
        headers: new HttpHeaders({'Content-Type' : 'application/json'})
      });
    
  }

}
