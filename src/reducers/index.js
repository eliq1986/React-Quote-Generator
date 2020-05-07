import { combineReducers } from 'redux';
import { quotes } from '../data';



export const quotesReducer = (state = quotes[0], action) => {

    switch(action.type) {
      case "RANDOM_QUOTE":
        const randomNumber = [Math.floor(Math.random() * action.payload.length)];
        const randomQuoteObject = action.payload[randomNumber];
        return randomQuoteObject;

      default:
        return state;
    }

}



export default combineReducers({
  quotesReducer
});
