import {Component, OnInit} from '@angular/core';
import {WordClass} from '../../shared/classes/word.class';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html'
})
export class WelcomeComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    Array.from(document.querySelectorAll('[data-function="c-word"]')).forEach((word) => new WordClass(word));
  }

}
