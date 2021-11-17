import { doc, setDoc, getDoc, Timestamp } from "firebase/firestore";
import db from "/src/firebase";
import { format } from "date-fns";

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
         [format(new Date(2021, 10, 17), 'EEEE, dd MMMM')]: [
            { reward: 125, task: "Find dad's wallet", date: format(new Date(2021, 10, 17), 'dd MMMM') },
            { reward: 100, task: "Put away old toys to white boxes on the balkoney", date: format(new Date(2021, 10, 17), 'dd MMMM') },
            { reward: 75, task: "Wash the dishes", date: format(new Date(2021, 10, 17), 'dd MMMM') },
         ],
         [format(new Date(2021, 11, 14), 'dd MMMM')]: [
            { reward: 75, task: "Wash the dishes", date: format(new Date(2021, 11, 14), 'dd MMMM') },
            { reward: 50, task: "Water plants on the second floor", date: format(new Date(2021, 11, 14), 'dd MMMM') },
         ],
         [format(new Date(2021, 11, 13), 'dd MMMM')]: [
            { reward: 100, task: "Help grandma with shopping", date: format(new Date(2021, 11, 13), 'dd MMMM') },
            { reward: 50, task: "Water plants", date: format(new Date(2021, 11, 13), 'dd MMMM') },
         ],
      });


      dispatch(initCardsHistorySuccess());

   } catch (e) {
      console.log(e.message)
      dispatch(initCardsHistoryFailure());
   }
}

export const getCardsHistory = () => async (dispatch) => {
   dispatch(getCardsHistoryRequest());

   try {
      const docRef = doc(db, "cards", "cardsHistory");
      const docSnap = await getDoc(docRef);

      const data = docSnap.data();

      dispatch(getCardsHistorySuccess(data))
   } catch (err) {
      dispatch(getCardsHistoryFailure(err.message))
      console.log(err.message)
   }
}