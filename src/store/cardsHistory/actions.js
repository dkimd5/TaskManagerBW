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

   try {
      await setDoc(doc(db, "cards", "cardsHistory"), {
         [Timestamp.fromDate(new Date("November 15, 2021"))]: [
            { reward: 125, task: "Find dad's wallet", date: TODAY },
            { reward: 100, task: "Put away old toys to white boxes on the balkoney", date: TODAY },
            { reward: 75, task: "Wash the dishes", date: TODAY },
         ],
         [Timestamp.fromDate(new Date("November 14, 2021"))]: [
            { reward: 75, task: "Wash the dishes", date: YESTERDAY },
            { reward: 50, task: "Water plants on the second floor", date: YESTERDAY },
         ],
         [Timestamp.fromDate(new Date("November 13, 2021"))]: [
            { reward: 100, task: "Help grandma with shopping", date: BEFORE_YESTERDAY },
            { reward: 50, task: "Water plants", date: BEFORE_YESTERDAY },
         ],
      });

      console.log("initCardsHistoryRequest")

      dispatch(initCardsHistorySuccess());

   } catch (e) {
      dispatch(initCardsHistoryFailure());
   }
}

export const getCardsHistory = () => async (dispatch) => {
   dispatch(getCardsHistoryRequest());

   try {
      const docRef = doc(db, "cards", "cardsHistory");
      const docSnap = await getDoc(docRef);

      const data = docSnap.data();
      console.log(data);

      dispatch(getCardsListSuccess(data))
   } catch (err) {
      dispatch(getCardsListFailure(err.message))
   }
}