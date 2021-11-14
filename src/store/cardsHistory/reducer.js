import { MOVE_CARD_TO_HISTORY } from "./actions";

const initialState = {
   [today]: [
      { reward: 125, task: "Find dad's wallet", date: today },
      { reward: 100, task: "Put away old toys to white boxes on the balkoney", date: today },
      { reward: 75, task: "Wash the dishes", date: today },
   ],
   [yesterday]: [
      { reward: 75, task: "Wash the dishes", date: yesterday },
      { reward: 50, task: "Water plants on the second floor", date: yesterday },
   ],
   [beforeYesterday]: [
      { reward: 100, task: "Help grandma with shopping", date: beforeYesterday },
      { reward: 50, task: "Water plants", date: beforeYesterday },
   ]
}

export const cardsHistoryReducer = (state = initialState, action) => {
   switch (action.type) {
      case MOVE_CARD_TO_HISTORY: {
         return {
            ...state,
            [action.payload.date]: [...state[date], action.payload],
         }
      };
      default:
         return state;
   }
}