import { Component, OnInit, Input, HostListener, Output, EventEmitter } from '@angular/core';
import { DataService } from './../GlobalService';
import { SidebarComponent } from './../sidebar/sidebar.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  porte = '../../assets/porte.png';
  fenetre = '../../assets/fenetre.png';
  radioModel = 'Exterieur';
  @Output() etat = true;
  constructor(public dataService: DataService) {

  }
  message = 'change etat';

  @Output() messageEvent = new EventEmitter<string>();
  @Output() exterieurMsg = new EventEmitter<string>();
  @Output() interieurMsg = new EventEmitter<string>();
  ngOnInit() {
  }
  presser() {

    // console.log('ouvrir menu', this.etat);
  }
  pre() {
    console.log('test');
    // console.log('ouvrir menu', this.etat);
  }
  exterieur() {
    console.log('exterieur ');
    this.exterieurMsg.emit('test');
  }
  interieur() {
console.log('interieur');
this.interieurMsg.emit('test int');
  }
  sendMessage() {
    console.log('envoi');
    this.messageEvent.emit('test');
  }
  vueExterieur() {
    console.log('Exterieur');
  }
  vueInterieur() {
    console.log('Interieur');
  }
}
