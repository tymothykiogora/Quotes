import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [
    new Quote(
    1,
    'Dr. Christopher Dayagdag',
    'Charles Kaunda',
    'A website without visitors is like a ship lost in the horizon',
    new Date(2020,9,27)),


    new Quote(
    2,
    'Unknown',
    'Norman Stephen',
    'A user interface is like a joke. If you have to explain it, it is not that good', 
    new Date(2021,2,16)),

    new Quote(
    3,
    'Antonie De-Saint Exupery',
    'Christian Pulisic',
    'A designer knows he has achieved perfection not when there is nothing left to add, but when there is nothing left to take away',
    new Date(2020,8,8)),

    new Quote(
    4,
    'Paul Cookson',
    'Paul Gichuki',
    'Great web design without functionality is like a sports car with no engine',
    new Date(2019,8,21)),

    new Quote(
    5,
    'Anonymous',
    'Tymothy Kiogora',
    'It is not a bug, it is an undocumented feature!',
    new Date(2020,8,21))
  ]
  goals: any;


  //add new quote
  addNewQuote(quote:any) {
    this.quotes.push(
      new Quote(
        quote.id,
        quote.author,
        quote.createdBy,
        quote.statement,
        new Date()
      )
    );
  }
    
    
  
  //toggle details
  toggleDetails(index: number) {
    this.quotes[index].showVotes = !this.quotes[index].showVotes;
  }
  //delete a quote
  deleteQuote(deleteQuoteEvent: any,index: number) {
    if(deleteQuoteEvent) {
      this.quotes.splice(index,1);
    }
  }
  //upvote a quote
  upVoteQuote(upVoteQuoteEvent: any,index:number) {
    if(upVoteQuoteEvent) {
      this.quotes[index].likes++;
    }
  }
  
  // getting the quote with the highest likes from the array
  getQuoteWithHighestLikes() {
    let quoteWithHighestLikes = this.quotes[0];
    for (let i = 0; i < this.quotes.length; i++) {
      if (this.quotes[i].likes > quoteWithHighestLikes.likes) {
        quoteWithHighestLikes = this.quotes[i];
      }
    }
    return quoteWithHighestLikes;
  }

  constructor() { }

  ngOnInit(): void {
  }
}