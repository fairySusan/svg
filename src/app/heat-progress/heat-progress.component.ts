import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-heat-progress',
  templateUrl: './heat-progress.component.html',
  styleUrls: ['./heat-progress.component.css']
})
export class HeatProgressComponent implements OnInit {
  _heatData: any = [{ value: 2345, rate: 0.3, unit: '%' }];
  // @Input('heatData') heatData: any =  [{ value: 2345, rate: 0.3, unit: '%' }];
  contentStyle = {
    width: '220px',
    height: '60px'
  };
  labelStyle = {
    display : 'block',
    fontSize: '16px',
    height: '30px',
    'line-height': '30px',
    'text-align': 'center',
    color: '#fff',
    marginLeft: '5px',
  };
  itemStyle = {
  };
  valueStyle = {
    color: '#FFE60F',
    fontSize: '30px',
    marginRight: '4px'
  };
  allNum = 10;
  reactPath: String = '';
  cellSpace = 1;
  contentWidth = 220;
  contentHeight = 60;
  cellWidth = 20;
  cellHeight = 20;
  startColor = '#079727';
  endColor = '#F0AA34';
  itemWidth = 220;
  constructor() {
  }

  ngOnInit() {
    this.setPath();
  }
  @Input('heatData') set heatData(newValue) {
    this._heatData = newValue;
    this.setPath();
  }
  get heatData() {
    return this._heatData;
  }
  setPath() {
    const len = this.heatData.length;
    this.cellWidth = this.itemWidth / this.allNum - this.cellSpace;
    const itHeight = this.contentHeight / (this.allNum + 2);
    let rPath = '';
    let x = 0;
    const y = 0;
    let x1 = this.cellWidth;
    const y1 = this.cellHeight;

    for (let i = 0; i < this.allNum; i++) {
      rPath += 'M' + x + ',' + y + ' ' + 'L' + x1 + ',' +
        y + ' ' + 'L' + x1 + ',' + y1 + ' ' + 'L' + x +
        ',' + y1 + ' ' + 'L' + x + ',' + y + ' Z ';
        x = x1 + this.cellSpace;
        x1 = x + this.cellWidth;
    }
    this.reactPath = rPath;
  }

}
