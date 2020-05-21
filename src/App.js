import React from "react";
import Quote from "./Quote";
import quotes from './StoredQuotes'
import "./App.css";

/*
Like that you imported quotes from another file instead of putting them all in this file

Another way to write state in a class component that you will encounter will simply be 
state = {} without the constructor, super, etc.

Either are acceptable
*/

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      quote: quotes[0].quote,
      
    };
  }
  //Make all functions arrow functions so randomQuote = () => {return ();}
  randomQuote() {
    const randomNumber = Math.floor(Math.random() * quotes.length);
    return quotes[randomNumber];
    
  }
  shuffleQuotes(array){
    return array.sort(()=>Math.random()-0.5)
  }

  handleClick = () => {
    const generateRandomQuote = this.randomQuote();
    this.setState({
      quote: generateRandomQuote.quote
    });
    this.shuffleQuotes(quotes)
  };

  randomColor() {
    const color = `rgb(
      ${Math.floor(Math.random() * 155)},
      ${Math.floor(Math.random() * 155)},
      ${Math.floor(Math.random() * 155)})`;
    return color;
  }
  //You consider naming Quote QuoteCard instead so we have a better understanding of what is being displayed
  render() {
    return (
      <div>
        <Quote
          displayColor={this.randomColor}
          handleClick={this.handleClick}
          {...this.state}
        />
      </div>
    );
  }
}

export default App;
