import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnChanges, OnInit {
  image = '../../assets/exterieur-6.jpeg';
interieur = false;
exterieur = true ;
  @Input() childMessage: string;


  test() {
    console.log('test');

  }
  constructor() { }
  ngOnChanges(changes: SimpleChanges) {

    console.log(this.childMessage);

  }
  ngOnInit() {
  }

}
