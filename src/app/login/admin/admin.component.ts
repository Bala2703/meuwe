import { Component, Input, OnInit } from '@angular/core';
import { GetService } from 'src/app/service/get.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  @Input() dataSource! : any;

  constructor(private getservice : GetService) { }

  time = new Date();
  interval:any;

  ngOnInit(): void {


  }

}