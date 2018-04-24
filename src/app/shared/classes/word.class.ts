import {LetterClass} from './letter.class';
import * as charming from 'charming';

export class WordClass {
  DOM;

  constructor(word) {
    this.DOM = {};
    this.DOM.word = word;
    this.layout();
  }

  layout() {
    charming(this.DOM.word, {classPrefix: 'c-word__letter-wrap c-word__letter-wrap--'});
    Array.from(this.DOM.word.querySelectorAll('span')).forEach((letter, pos) => new LetterClass(letter, pos));
  }
}
