import { Injectable } from '@angular/core';
import {Router} from "@angular/router"
@Injectable({
  providedIn: 'root'
})
export class ApiUrlService {

  httpStr:string =  window.location.href.substring(0,window.location.href.indexOf(':'));
  constructor() { }

  
  //baseURL:string = sessionStorage.getItem("baseURL")
  //http://103.228.114.71:8095/sgc
  baseURL:string = "http://103.228.114.71:8095/"
  //baseURL1:string = "://3.6.84.172:5011/"
  sgcApi: string = this.baseURL+"sgc/";
  }

 


