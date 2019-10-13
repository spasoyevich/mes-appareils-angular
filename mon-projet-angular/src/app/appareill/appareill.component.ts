import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-appareill',
  templateUrl: './appareill.component.html',
  styleUrls: ['./appareill.component.scss']
})
export class AppareillComponent implements OnInit {

@Input() appareilName: string;
@Input() appareilStatus: string;


  constructor() { }

  ngOnInit() {
  }

  getStatus(){
  	return this.appareilStatus;
  }
    getColor() {
    if(this.appareilStatus === 'allumé') {
      return 'green';
    } else if(this.appareilStatus === 'éteint') {
      return 'red';
    }
}
}
