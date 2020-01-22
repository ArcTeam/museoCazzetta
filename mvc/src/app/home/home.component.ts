import { Component, OnInit } from '@angular/core';
import { CarouselComponent } from '../carousel/carousel.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  svgToggle(val: string){
    let all = document.getElementsByClassName('piano');
    for (let i = 0; i < all.length; i++) {
      all[i].setAttribute("class", 'hideFloor piano');
    }
    let checked = document.getElementById(val);
    checked.setAttribute("class", 'showFloor piano');
  }

}
