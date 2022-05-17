import { Component, OnInit } from '@angular/core';
import { GetService } from "../service/get.service";
import {MatTable, MatTableDataSource} from '@angular/material/table';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  display: string[] = ['id','date','description'];
  dataSource = new MatTableDataSource <getData>();
  constructor(private getService:GetService) { }
time = new Date();
  interval:any;
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
}
export interface getData{
    
  id : string;
    date : string;
    description : string;
}
