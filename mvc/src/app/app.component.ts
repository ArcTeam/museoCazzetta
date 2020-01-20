import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {
    if(!localStorage.getItem('lang')){
      localStorage.setItem('lang', 'it')
    }
  }
}
