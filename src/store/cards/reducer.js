import { ADD_CARD } from './actions';
import { TODAY, YESTERDAY } from "/src/utils/constants";

const initialState = [
   { reward: 125, task: "Find dad's wallet", date: YESTERDAY },
   { reward: 100, task: "Put away old toys to white boxes on the balkoney", date: today },
   { reward: 75, task: "Wash the dishes", date: TODAY },
   { reward: 50, task: "Make your bed in the morning", date: YESTERDAY },
   { reward: 50, task: "Fix the pillowcase", date: TODAY },
   { reward: 50, task: "Water plants", date: YESTERDAY },
];

export const cardsReducer = (state = initialState, action) => {
   switch (action.type) {
      case ADD_CARD: {
         return [
            ...state,
            action.payload
         ]
      };
      default:
         return state;
   }
}