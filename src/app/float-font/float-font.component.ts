import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-float-font',
  templateUrl: './float-font.component.html',
  styleUrls: ['./float-font.component.css']
})
export class FloatFontComponent implements OnInit {
  color = ['green', 'red', 'yellow', 'aqua'];
  mockData = [
    {
      name: '有效拦截次数',
      style: {
        left: '20%',
        top: '10%',
        'text-shadow': 'green 0 0 5px',
        color: 'green',
      },
      className: 'center'
    },
    {
      name: '绕行告警数量',
      style: {
        left: '50%',
        top: '30%',
        'text-shadow': 'red 0 0 5px',
        animation:  'floatAni 1s ease-in infinite',
      }
    },
    {
      name: '拦截次数',
      style: {
        left: '10%',
        top: '30%',
        'text-shadow': 'yellow 0 0 5px',
        animation:  'floatAni 1s ease-in infinite',
      }
    },
    {
      name: '拦截次数',
      style: {
        left: '60%',
        top: '60%',
        'text-shadow': 'aqua 0 0 5px',
        animation:  'floatAni 1s ease-in infinite',
      }
    }];
  constructor(private rd: Renderer2, private el: ElementRef) { }

  ngOnInit() {}
  clickSelf(i) {
    const currIndex = this.mockData.findIndex((item) => {
      return item.className === 'center';
    });
    let  top = '';
    let left = '';
    this.mockData.forEach((el, index) => {
      if (index === i) {
        el.style.color = this.color[i];
        el.className = 'center';
        top = el.style.top;
        left = el.style.left;
        delete(el.style.animation);
      } else {
        el.style.color = 'transparent';
        el.className = 'other';
        el.style.animation = 'floatAni 1s ease-in infinite';
      }
    });
    this.mockData[currIndex].style.top = top;
    this.mockData[currIndex].style.left = left;
  }
}
