import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiUrlService } from 'src/app/share/api-url/api-url.service';

@Injectable({
  providedIn: 'root'
})
export class BirthDayService {

  constructor(private _apiURL:ApiUrlService, private _http:HttpClient) { }
  getBirth(){
    return this._http.get(this._apiURL.sgcApi + "getProductListByType/Birthday")
  }
}
