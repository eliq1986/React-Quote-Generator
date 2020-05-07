import React from 'react';
import {connect} from 'react-redux';

const QuoteBox = ({ quote }) => {


  return (
    <div id="quote-box">
    <p className="quote">{quote.quote}</p>
    <p className="source">{quote.source}
      <span className="citation">{quote.citation}</span>
      <span className="year">{quote.year}</span>
    </p>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state)
  return {
    quote: state.quotesReducer
  }
}

export default connect(mapStateToProps)(QuoteBox);
