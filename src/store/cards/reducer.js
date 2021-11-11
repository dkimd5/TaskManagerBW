import { ADD_CARD } from './actions';
import { format } from "date-fns";

const today = format(new Date(), "EEEE, MMMM d");
var d = new Date();
const yesterday = format(d.setDate(d.getDate() - 1), "EEEE, MMMM d");

const initialState = [
   { reward: 125, task: "Find dad's wallet", date: yesterday },
   { reward: 100, task: "Put away old toys to white boxes on the balkoney", date: today },
   { reward: 75, task: "Wash the dishes", date: today },
   { reward: 50, task: "Make your bed in the morning", date: yesterday },
   { reward: 50, task: "Fix the pillowcase", date: today },
   { reward: 50, task: "Water plants", date: yesterday },
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