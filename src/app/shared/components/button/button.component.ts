import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html'
})
export class ButtonComponent implements OnInit {

  @Input() buttonSize;
  @Input() buttonState;

  constructor() {
  }

  ngOnInit() {
  }

}
