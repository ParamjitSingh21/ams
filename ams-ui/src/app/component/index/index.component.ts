import { Component, OnInit } from '@angular/core';

var bgImage: number;
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const random = Math.floor(Math.random() * 10);
    bgImage = random;
  }
  
  getRandomImage(): string {
    return 'url(../assets/img/img' + bgImage + '.jpg)';
  }
}
