import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  lang : string;
  constructor(private translate: TranslateService) {
    this.lang = localStorage.getItem('lang');
    translate.setDefaultLang(this.lang);
  }

  ngOnInit() { }

  useLanguage(language: string) {
    localStorage.setItem('lang', language);
    this.translate.use(language);
  }

}
