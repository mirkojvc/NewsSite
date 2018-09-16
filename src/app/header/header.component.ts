import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  // Countories from wich the news is comming
  private locations = {rs: 'Serbia', ru: 'Russia', us: 'United states', gb: 'Great Britan', de: 'Germany'};
  objectKeys = Object.keys;
  constructor() { }

  ngOnInit() {
  }

}
