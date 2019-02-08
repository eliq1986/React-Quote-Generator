import React from 'react';

const QuoteBox = (props) => {
  console.log(props.quote);
  return (
    <div id="quote-box">
      <p className="quote">{props.quote.quote}</p>
      <p className="source">{props.quote.source}
        <span className="citation">{props.quote.citation}</span>
        <span className="year">{props.quote.year}</span>
      </p>
    </div>
  );
};


export default QuoteBox;
