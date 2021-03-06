import { Component, Input, OnInit } from '@angular/core';
import { GetService } from "../service/get.service";
import {MatTable, MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  display: string[] = ['id','date','description'];
  dataSource = new MatTableDataSource <getData>();

  constructor(private getService:GetService,private router:Router) { }
  time = new Date();
  interval:any;
  login = false;
  home = true;
  ngOnInit(): void {
      this.interval = setInterval(() => {
          this.refreshData();
      },1000);
      setInterval(() => {
          this.time = new Date();
      },1000);

  }
  refreshData(){
    this.getService.getReq()
      .subscribe(data => {this.dataSource.data = data as getData[];
      });
    }

    onLogin(){
      this.home= false;
      this.login = true;
    }
    onHome(){
      this.home= true;
      this.login = false;
    }
}
export interface getData{
    
  id : string;
  title : string;
    date : string;
    description : string;
}
