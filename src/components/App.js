import React, { Component } from 'react';
import {connect} from 'react-redux';
import { getRandomQuote } from '../actions';
import './App.css';

import QuoteBox from './QuoteBox';


class App extends Component {

getRandomNumber = () => Math.floor(Math.random() * 255);



changeBackground = () => {
  document.body.style.backgroundColor = `rgb(${this.getRandomNumber()},${this.getRandomNumber()},${this.getRandomNumber()})`;
}

render() {

  return (
    <div className="container" >
      <QuoteBox />
      <button onClick={()=>{
        this.changeBackground()
        this.props.getRandomQuote()}}
         id="loadQuote">Show another quote</button>
    </div>
  );
};


}

const mapStateToProps = (state) => {
 return {
   quote: state.quotesReducer
  }
}


export default connect(mapStateToProps, {
  getRandomQuote
})(App);
