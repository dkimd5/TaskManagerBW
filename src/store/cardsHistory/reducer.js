import { 
   MOVE_CARD_TO_HISTORY,
   INIT_CARDS_HISTORY_REQUEST,
   INIT_CARDS_HISTORY_SUCCESS,
   INIT_CARDS_HISTORY_FAILURE,
   GET_CARDS_HISTORY_REQUEST,
   GET_CARDS_HISTORY_SUCCESS,
   GET_CARDS_HISTORY_FAILURE
 } from "./actions";
import { TODAY, YESTERDAY, BEFORE_YESTERDAY } from "/src/utils/constants";

// const initialState = {
//    [TODAY]: [
//       { reward: 125, task: "Find dad's wallet", date: TODAY },
//       { reward: 100, task: "Put away old toys to white boxes on the balkoney", date: TODAY },
//       { reward: 75, task: "Wash the dishes", date: TODAY },
//    ],
//    [YESTERDAY]: [
//       { reward: 75, task: "Wash the dishes", date: YESTERDAY },
//       { reward: 50, task: "Water plants on the second floor", date: YESTERDAY },
//    ],
//    [BEFORE_YESTERDAY]: [
//       { reward: 100, task: "Help grandma with shopping", date: BEFORE_YESTERDAY },
//       { reward: 50, task: "Water plants", date: BEFORE_YESTERDAY },
//    ]
// }

const initialState = {
   cardsHistory: {},
   request: {
      error: '',
   },
}

export const cardsHistoryReducer = (state = initialState, action) => {
   switch (action.type) {
      case MOVE_CARD_TO_HISTORY: {
         return {
            ...state,
            [action.payload.date]: [...state[date], action.payload],
         }
      };
      case INIT_CARDS_HISTORY_REQUEST: {
         return {
            ...state
         }
      };
      case INIT_CARDS_HISTORY_SUCCESS: {
         return {
            ...state
         }
      }
      case INIT_CARDS_HISTORY_FAILURE: {
         return {
            ...state,
            request: {
               error: action.payload,
            }
         }
      };
      case GET_CARDS_HISTORY_REQUEST: {
         return {
            ...state
         }         
      };
      case GET_CARDS_HISTORY_SUCCESS: {
         return {
            ...state,
            cardsHistory: action.payload,
         }
      };
      case GET_CARDS_HISTORY_FAILURE: {
         return {
            ...state,
            request: {
               error: action.payload,
            }
         }
      };
      default:
         return state;
   }
}