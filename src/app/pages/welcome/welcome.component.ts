import {Component, OnInit} from '@angular/core';
import {Word} from '../../shared/classes/letter';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    Array.from(document.querySelectorAll('[data-function="c-word"]')).forEach((word) => new Word(word));
  }

}
