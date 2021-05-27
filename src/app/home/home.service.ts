import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiUrlService } from '../share/api-url/api-url.service';


@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private _apiUrl:ApiUrlService,  private http:HttpClient ) {}
  getAll() {
    return this.http.get(this._apiUrl.sgcApi + "getAllProducts"); 
    } 
}
