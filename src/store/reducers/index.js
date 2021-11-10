import { combineReducers } from "redux";
import { cardsReducer } from "../cards/reducer"

export const combRed = combineReducers({
   cards: cardsReducer,
});