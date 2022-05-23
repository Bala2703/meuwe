import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { GetService } from '../service/get.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  active = true;
  admin: any;

  constructor(private router: Router,
    private http: HttpClient,
    private getService: GetService) {
  }


  ngOnInit(): void {

}
  onClick(value: any, password: any) {
    console.log(value, password)
    this.http.post('http://localhost:3000/auth', { 'email': value, 'password': password })
    .subscribe((data) => {
      this.admin = data as getUser[];
      if(this.admin.redirect == '/admin'){
      this.router.navigate([this.admin.redirect]);
      }
      else{
        window.alert(this.admin.error);
      }
    })
  }


  

}

export interface getUser {
  id: number;
  name: string;
  email: string;
  loginstatus: number;
  redirect : string;
  error : string;
}

