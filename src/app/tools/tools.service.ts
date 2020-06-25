import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToolsService {

  //private _url: string = "/assets/products.json";
  planId : string
  planDate : string
  private _url: string = "https://localhost:44366/TestCasesByPlanIdAndDate";
  //formData : Product;
  constructor(private http : HttpClient) { }

  getTestCaseData(planId, planDate) : Observable<any>{ 
    let params = new HttpParams();
    params = params.append('planId', planId);
    params = params.append('date', planDate);
    return this.http.get<any>(this._url, {params:params});
  }
}
