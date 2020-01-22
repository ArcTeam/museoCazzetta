import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  public slides = [
    { src: "./assets/img/carousel/001.jpg" },
    { src: "./assets/img/carousel/002.jpg" },
    { src: "./assets/img/carousel/003.jpg" },
    { src: "./assets/img/carousel/004.jpg" },
    { src: "./assets/img/carousel/005.jpg" },
    { src: "./assets/img/carousel/006.jpg" },
    { src: "./assets/img/carousel/007.jpg" },
    { src: "./assets/img/carousel/008.jpg" },
    { src: "./assets/img/carousel/009.jpg" }
  ];
  customOptions: any = {
    items: 1,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    animateOut: 'fadeOut',
    autoHeight: false,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    // navSpeed: 700,
    // navText: ['', ''],
    // responsive: {
    //   0:   { items: 1 },
    //   400: { items: 1 },
    //   740: { items: 1 },
    //   940: { items: 1 }
    // },
    nav: false
  }
  constructor() { }

  ngOnInit() {
  }

}
