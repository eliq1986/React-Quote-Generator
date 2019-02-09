import React from 'react';

const QuoteBox = ({quote}) => {
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


export default QuoteBox;
