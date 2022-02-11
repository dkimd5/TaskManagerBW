import { combineReducers } from "redux";
import { cardsReducer } from "../cards/reducer";
import { cardsHistoryReducer } from "../cardsHistory/reducer";

export const combRed = combineReducers({
   cards: cardsReducer,
   cardsHistory: cardsHistoryReducer,
});