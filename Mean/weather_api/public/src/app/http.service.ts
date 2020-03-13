import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  id:any;
  constructor(private _http: HttpClient) {

   }

getRealCity(id){

  return this._http.get(`https://api.openweathermap.org/data/2.5/weather?id=${id}&appid=da16133e378c08dfb5962a1b2b98117c`);
}
}