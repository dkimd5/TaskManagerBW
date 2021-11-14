import { MOVE_CARD_TO_HISTORY } from "./actions";
import { TODAY, YESTERDAY, BEFORE_YESTERDAY } from "/src/utils/constants";

const initialState = {
   [TODAY]: [
      { reward: 125, task: "Find dad's wallet", date: TODAY },
      { reward: 100, task: "Put away old toys to white boxes on the balkoney", date: TODAY },
      { reward: 75, task: "Wash the dishes", date: TODAY },
   ],
   [YESTERDAY]: [
      { reward: 75, task: "Wash the dishes", date: YESTERDAY },
      { reward: 50, task: "Water plants on the second floor", date: YESTERDAY },
   ],
   [BEFORE_YESTERDAY]: [
      { reward: 100, task: "Help grandma with shopping", date: BEFORE_YESTERDAY },
      { reward: 50, task: "Water plants", date: BEFORE_YESTERDAY },
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