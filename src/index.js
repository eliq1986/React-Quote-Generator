import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

const quotes = [

  {
    quote: "Is Butter a carb",
    source: "Regina George",
    year: 2004,
    citation: "Mean Girls"


  }, {
    quote: `To see the world, things dangerous to come to, to see behind walls, draw closer, to find each other, and to feel. That is the purpose of life`,
    source: "Walter Mitty",
    year: 2013,
    citation: "The Secret Life Of Walter Mitty"


  }, {
    quote: `What we do in life echoes in eternity.`,
    source: "Maximus",
    year: 2000,
    citation: "Gladiator"


  }, {
    quote: `Kid, there are heroes and there are legends. Heroes get remembered, but legends never die. Follow your heart, kid, and you’ll never go wrong.`,
    source: "Babe Ruth",
    year: 1993,
    citation: "The Sandlot"


  }, {
    quote: `Do, or do not. There is no “try`,
    source: "Yoda",
    year: 1980,
    citation: "Empire Strikes Back"


  }, {
    quote: `Who is your daddy and what does he do`,
    source: "John Kimble",
    year: 1990,
    citation: "Kindergarten Cop"
  }
];




ReactDOM.render(<App quotes={quotes}/>, document.getElementById("root"))
