import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  heatData = [
    { value: 45, rate: 0.3, unit: '%' },
    { value: 25, rate: 0.7, unit: '%' },
    { value: 45, rate: 0.4, unit: '%' },
    { value: 55, rate: 0.3, unit: '%' },
    { value: 95, rate: 0.9, unit: '%' },
    { value: 45, rate: 0.1, unit: '%' }
  ];
  constructor() { }

  ngOnInit() {
  }

}
