import { doc, setDoc, getDoc, Timestamp } from "firebase/firestore";
import db from "/src/firebase";

export const MOVE_CARD_TO_HISTORY = 'CARDS_HISTORY::MOVE_CARD_TO_HISTORY';
export const INIT_CARDS_HISTORY_REQUEST = 'CARDS_HISTORY::INIT_CARDS_HISTORY_REQUEST';
export const INIT_CARDS_HISTORY_SUCCESS = 'CARDS_HISTORY::INIT_CARDS_HISTORY_SUCCESS';
export const INIT_CARDS_HISTORY_FAILURE = 'CARDS_HISTORY::INIT_CARDS_HISTORY_FAILURE';
export const GET_CARDS_HISTORY_REQUEST = 'CARDS_HISTORY::GET_CARDS_HISTORY_REQUEST';
export const GET_CARDS_HISTORY_SUCCESS = 'CARDS_HISTORY::GET_CARDS_HISTORY_SUCCESS';
export const GET_CARDS_HISTORY_FAILURE = 'CARDS_HISTORY::GET_CARDS_HISTORY_FAILURE';

export const moveCardToHistory = card => ({
   type: MOVE_CARDS_HISTORY_TO_HISTORY,
   payload: card,
})

export const initCardsHistoryRequest = () => ({
   type: INIT_CARDS_HISTORY_REQUEST,
})

export const initCardsHistoryFailure = (error) => ({
   type: INIT_CARDS_HISTORY_FAILURE,
   payload: error,
})

export const initCardsHistorySuccess = () => ({
   type: INIT_CARDS_HISTORY_SUCCESS,
})

export const getCardsHistoryRequest = () => ({
   type: GET_CARDS_HISTORY_REQUEST,
})

export const getCardsHistoryFailure = (error) => ({
   tyep: GET_CARDS_HISTORY_FAILURE,
   payload: error,
})

export const getCardsHistorySuccess = (cardList) => ({
   type: GET_CARDS_HISTORY_SUCCESS,
   payload: cardList,
})

export const initCardsHistory = () => async (dispatch) => {
   dispatch(initCardsHistoryRequest());

   
}