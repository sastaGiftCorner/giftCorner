import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiUrlService } from '../share/api-url/api-url.service';
import { BataServiceService } from '../share/bata-service.service';


@Injectable({
  providedIn: 'root'
})
export class AdminDashbaordService {

  constructor(private _apiURL:ApiUrlService, private http:HttpClient, private rera:BataServiceService ) {  }

  addUser() {
  return this.http.get(this._apiURL.sgcApi + "getAllProducts"); 
  }
}
