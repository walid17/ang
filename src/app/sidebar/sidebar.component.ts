import { Component, OnInit, Input } from '@angular/core';
import { HeaderComponent } from './../header/header.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  isCollapsed = true;
  maMaisonCollapse = true;
  formeCollapse = true;
  materiauxCollapse = true;
  couleursCollapse = true;
  vitrageCollapse = true;
  dimensionsCollapse = true;
  accessoiresCollapse = true;
  perspectiveCollapse = true;

  oneAtATime = true;
  porte = '../../assets/porte.png';
  @Input() childMessage: string;

  ngOnInit() {
    // console.log(this.childMessage);
  }
  getStyle() {
    console.log(this.childMessage);

  }
  collapsed(event: any): void {
    console.log(event);

  }

  expanded(event: any): void {
    console.log(event);
  }

  log(event: boolean) {
    console.log(`Accordion has been ${event ? 'opened' : 'closed'}`);
  }
}
