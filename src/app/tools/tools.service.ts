import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToolsService {

  //private _url: string = "/assets/products.json";
  private _url: string = "https://localhost:44366/TestCasesByPlanIdAndDate";
  //formData : Product;
  constructor(private http : HttpClient) { }

  getTestCaseData() : Observable<any>{  
    return this.http.get<any>(this._url);
  }
}
