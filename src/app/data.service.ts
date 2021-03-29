import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private hc:HttpClient) { }
  Getdata():Observable<any>
  {
    return this.hc.get<any>("https://reqres.in/api/users?delay=3");
  }
}
