import { Component, style, ElementRef, trigger, state, animate, transition, HostListener, ViewChild, OnInit } from '@angular/core';
import { DataService } from './GlobalService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('slideInOut', [
      state('in', style({

      })),
      state('out', style({

      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ]),
  ]
})
export class AppComponent {


  windowWidth: any;
  title = 'app';
  parentMessage = true;
  constructor(public dataservice: DataService) {
    dataservice.serviceData = 'walid';
    // console.log(dataservice.serviceData);
  }
  message: string;
  menuState = 'out';

  sideClass = 'out';
  contentClass = 'col-md-10';

  exterieur($event) {
    console.log('exterieur app !!!');
    this.parentMessage = this.parentMessage === true ? false : true;

  }
  interieur($event) {
    console.log('exterieur app !!!');
    this.parentMessage = this.parentMessage === true ? false : true;
  }
  receiveMessage($event) {
    console.log(this.sideClass);
    this.sideClass = this.sideClass === 'out' ? 'in' : 'out';
  }
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    // console.log('Width: ' + event.target.innerWidth);
    this.windowWidth = event.target.innerWidth;
    if (this.windowWidth < 500) {
      this.menuState = 'in';
    } else {
      this.menuState = 'out';
    }
  }
}
