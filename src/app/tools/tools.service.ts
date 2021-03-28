import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ToolsService {

  //private _url: string = "/assets/products.json";
   private _url: string = "http://localhost:3000/testCaseReport";
  //formData : Product;
  constructor(private http : HttpClient) { }

  getTestCaseData(planId, planDate) : Observable<any>{ 
    let params = new HttpParams();
    params = params.append('planId', planId);
    params = params.append('date', planDate);
    return this.http.get<any>(this._url, {params:params});
  }
}
