import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from "@angular/common/http"
@Injectable({
  providedIn: 'root'
})
export class GetService {
    date:any;
    description:any;
  constructor(private http:HttpClient) { }
  getReq(){
      return this.http.get<any>('http://localhost:3000/cinemas');
  }
  getUser(){
    return this.http.get<any>('http://localhost:3000/login');
  }
}

