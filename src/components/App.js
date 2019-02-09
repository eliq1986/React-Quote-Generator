import React, { Component } from 'react';
import './App.css';

import QuoteBox from './QuoteBox';


class App extends Component {

state = {
  quoteObj: this.props.quotes[Math.floor(Math.random() * this.props.quotes.length)]
}


getRandomQuote = quotesArr => {
 const randomQuote = quotesArr[Math.floor(Math.random() * quotesArr.length)];
 this.setState({
   quoteObj: randomQuote
 });
 this.changeBackground();
};

getRandomNumber = () => Math.floor(Math.random() * 255);

changeBackground = () => {
  document.body.style.backgroundColor = `rgb(${this.getRandomNumber()},${this.getRandomNumber()},${this.getRandomNumber()})`;
}

render() {

  return (
    <div className="container" >
      <QuoteBox quote={this.state.quoteObj} />
        <button onClick={()=>this.getRandomQuote(this.props.quotes)} id="loadQuote">Show another quote</button>
    </div>
  );
};
};

export default App;
