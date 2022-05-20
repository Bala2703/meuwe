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

  dataSource = new MatTableDataSource<getUser>();
  userData : getUser[] = [];
  interval: any;

  time = new Date();


  constructor(private router: Router,
    private http: HttpClient,
    private getService: GetService) {
  }

  ngOnInit(): void {

  }
  onClick(value: any, password: any) {

    console.log(value, password)
    this.http.post('http://localhost:3000/login', { 'email': value, 'password': password })
      .subscribe(data => {
        console.log(data);
      });
  }

  refreshData(){
    this.getService.getUser()
      .subscribe(data => {this.dataSource.data = data as getUser[];
      });
      console.log(this.dataSource.data[0].name);
    }
  

}

export interface getUser {
  id: number;
  name: string;
  email: string;
  loginstatus: number;
}

