import { Component, Input, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-detail',

    
        
          
    

        
    
    @@ -7,6 +8,8 @@ import { Component, OnInit } from '@angular/core';
  
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {

  //input property binding
  @Input()quote!: Quote;
  constructor() { }

  ngOnInit(): void {

    
          
            
    

          
    
    
  
  }
}