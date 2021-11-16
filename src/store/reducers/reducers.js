import { combineReducers } from "redux";
import { cardListReducer } from "../cards/reducer";
import { cardsHistoryReducer } from "../cardsHistory/reducer";

export const combRed = combineReducers({
   cards: cardListReducer,
   cardsHistory: cardsHistoryReducer,
});