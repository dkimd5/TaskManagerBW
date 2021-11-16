import { 
   ADD_CARD, 
   INIT_CARDS_COLLECTION_REQUEST,
   INIT_CARDS_COLLECTION_SUCCESS,
   INIT_CARDS_COLLECTION_FAILURE,
   GET_CARDS_LIST_REQUEST,
   GET_CARDS_LIST_SUCCESS,
   GET_CARDS_LIST_FAILURE
 } from './actions';


const initialState = {
   cardsList: [],
   request: {
      error: '',
   }
}

export const cardListReducer = (state = initialState, action) => {
   switch (action.type) {
      case ADD_CARD: {
         return {
            cardsList: [...state.cardsList, action.payload]
         }
      };
      case INIT_CARDS_COLLECTION_REQUEST: {
         return {
            ...state
         }
      };
      case INIT_CARDS_COLLECTION_SUCCESS: {
         return {
            ...state
         }
      };
      case INIT_CARDS_COLLECTION_FAILURE: {
         return {
            ...state,
            request: {
               error: action.payload,
            }
         }
      };
      case GET_CARDS_LIST_REQUEST: {
         return {
            ...state
         }
      };
      case GET_CARDS_LIST_SUCCESS: {
         return {
            ...state,
            cardsList: action.payload,
         }
      };
      case GET_CARDS_LIST_FAILURE: {
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