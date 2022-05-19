import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  active = true;

  constructor(private router:Router,private http:HttpClient) { }

  ngOnInit(): void {
  }
  onClick(value:any,password:any){
   console.log(value,password)
    this.http.post('http://localhost:3000/login',{'email':value,'password':password})
    .subscribe(data =>{
      console.log(data);
    });
  }

}
