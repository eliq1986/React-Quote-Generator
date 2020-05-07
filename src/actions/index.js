import { quotes }  from '../data';




export const getRandomQuote = () => {
  return {
    type:"RANDOM_QUOTE",
    payload: quotes
  }
}
