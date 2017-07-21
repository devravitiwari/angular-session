import { Component, Inject } from '@angular/core';
import { QuoteService } from './quote.service';

@Component({
  selector: 'random-quote',
  template: `
  <blockquote class="quote">
            <p><em>{{quote.line}}</em></p>
            <footer><cite title={{quote.author}}>{{quote.author}}</cite></footer>
        </blockquote >
  `
})
export class RandomQuoteComponent {

  constructor(@Inject(QuoteService) quoteService) {
    quoteService.generateRandomQuotes(4E3, quote => this.quote = quote);
  }

}
