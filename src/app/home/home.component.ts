import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  
  show = false;

  @Input() dataSource : any;

  constructor() { }

  ngOnInit(): void {
  }

}
