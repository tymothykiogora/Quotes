import { Component, OnInit, Output , EventEmitter,} from '@angular/core';
import { Quote } from '../quote';

@Component({
	@@ -9,8 +8,7 @@ import { Quote } from '../quote';
})
export class QuoteFormComponent implements OnInit {

  newQuote = new Quote(0, "", "", "", new Date());

  //event emitter
  @Output() addQuote = new EventEmitter<Quote>();
  //displaySuccessMessage
  displaySuccessMessage = false;
  constructor() { }
  onSubmit() {
    this.displaySuccessMessage = true;

    //create a new quote
    this.addQuote.emit(this.newQuote);
  }
  ngOnInit(): void {
  }
}