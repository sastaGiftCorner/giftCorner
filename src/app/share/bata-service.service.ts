import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BataServiceService {

  constructor(private _http: HttpClient) { }

  httpStr: string = window.location.href.substring(0, window.location.href.indexOf(':'));

  securepost(url: string, data: any) {
    let saTkn = sessionStorage.getItem("S_A_Token");
    if (saTkn) {
      let _hd = new HttpHeaders();
      //_hd = _hd.set("BATA_USER_SIGNATURE", saTkn);
      _hd = _hd.set('Content-Type', 'application/json');
      _hd = _hd.set("Authorization", "Bearer "+saTkn);
      return this._http.post(this.httpStr + url, data, { headers: _hd });
    } else {
      return new Observable<any>();
    }

  }
  secureput(url: string, data: any) {
    let saTkn = sessionStorage.getItem("S_A_Token");
    console.log(saTkn);
    if (saTkn) {
      let _hd = new HttpHeaders();
      _hd = _hd.set("Authorization", saTkn);
      return this._http.put(this.httpStr + url, data, { headers: _hd });
    } else {
      return new Observable<any>();
    }
  }

  secureget(url: string) {
    let saTkn = sessionStorage.getItem("S_A_Token");
    if (saTkn) {
      let _hd = new HttpHeaders();
      _hd = _hd.set('Accept', 'application/json');
      _hd = _hd.set('Content-Type', 'application/json');
      _hd = _hd.set("Authorization", "Bearer "+saTkn);
      return this._http.get(this.httpStr + url, { headers: _hd });
    } else {
      return new Observable<any>();
    }
  }

  securedelete(url: string) {
    let saTkn = sessionStorage.getItem("S_A_Token");
    if (saTkn) {
      let _hd = new HttpHeaders();
      _hd = _hd.set("Authorization", saTkn);
      console.log(saTkn);
      return this._http.delete(this.httpStr + url, { headers: _hd });
    } else {
      return new Observable<any>();
    }
  }


  secureMultipart(url: string, data: any) {
    let saTkn = sessionStorage.getItem("S_A_Token");
    if (saTkn) {
      let _hd = new HttpHeaders();
      _hd = _hd.set("Authorization", saTkn);
      return this._http.post(this.httpStr + url, data, { headers: _hd });
    } else {
      return new Observable<any>();
    }

  }

  get(url: string) {
    return this._http.get(this.httpStr + url);

  }

  post(url: string, data: any) {

    return this._http.post(this.httpStr + url, data);

  }

  delete(url: string) {
    return this._http.delete(this.httpStr + url)
  }


  put(url: string, data: any) {
    return this._http.put(this.httpStr + url, data)
  }
}
