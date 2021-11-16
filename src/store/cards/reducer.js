import { 
   ADD_CARD, 
   CARD_COLLECTION_INIT,
   CARD_COLLECTION_INIT_SUCCESS,
   CARD_COLLECTION_INIT_FAILURE,
   CARD_COLLECTION_GET_REQUEST,
   CARD_COLLECTION_GET_SUCCESS,
   CARD_COLLECTION_GET_FAILURE
 } from './actions';


const initialState = {
   cardList: [],
   request: {
      error: '',
   }
}

export const cardListReducer = (state = initialState, action) => {
   switch (action.type) {
      case ADD_CARD: {
         return {
            cardList: [...state.cardList, action.payload]
         }
      };
      case CARD_COLLECTION_INIT: {
         return {
            ...state
         }
      };
      case CARD_COLLECTION_INIT_SUCCESS: {
         return {
            ...state
         }
      };
      case CARD_COLLECTION_INIT_FAILURE: {
         return {
            ...state,
            request: {
               error: action.payload,
            }
         }
      };
      case CARD_COLLECTION_GET_REQUEST: {
         return {
            ...state
         }
      };
      case CARD_COLLECTION_GET_SUCCESS: {
         return {
            ...state,
            cardList: action.payload,
         }
      };
      case CARD_COLLECTION_GET_FAILURE: {
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