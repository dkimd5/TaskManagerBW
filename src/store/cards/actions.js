import { doc, setDoc, getDoc, updateDoc, Timestamp } from "firebase/firestore";
import db from "/src/firebase";

export const ADD_CARD = 'CARDS_LIST::ADD_CARD';
export const INIT_CARDS_COLLECTION_REQUEST = 'CARDS_LIST::INIT_CARDS_COLLECTION_REQUEST';
export const INIT_CARDS_COLLECTION_SUCCESS = 'CARDS_LIST::INIT_CARDS_COLLECTION_SUCCESS';
export const INIT_CARDS_COLLECTION_FAILURE = 'CARDS_LIST::INIT_CARDS_COLLECTION_FAILURE';
export const GET_CARDS_LIST_REQUEST = 'CARDS_LIST::GET_CARDS_LIST_REQUEST';
export const GET_CARDS_LIST_SUCCESS = 'CARDS_LIST::GET_CARDS_LIST_SUCCESS';
export const GET_CARDS_LIST_FAILURE = 'CARDS_LIST::GET_CARDS_LIST_FAILURE';


export const addCardRequest = newCard => ({
   type: ADD_CARD,
   payload: newCard,
})

export const initCardsCollectionRequest = () => ({
   type: INIT_CARDS_COLLECTION_REQUEST,
})

export const initCardsCollectionFailure = (error) => ({
   type: INIT_CARDS_COLLECTION_FAILURE,
   payload: error,
})

export const initCardsCollectionSuccess = () => ({
   type: INIT_CARDS_COLLECTION_SUCCESS,
})

export const getCardsListRequest = () => ({
   type: GET_CARDS_LIST_REQUEST,
})

export const getCardsListFailure = (error) => ({
   tyep: GET_CARDS_LIST_FAILURE,
   payload: error,
})

export const getCardsListSuccess = (cardsList) => ({
   type: GET_CARDS_LIST_SUCCESS,
   payload: cardsList,
})

export const initCardsCollection = () => async (dispatch) => {
   dispatch(initCardsCollectionRequest());

   try {
      await setDoc(doc(db, "cards", "cardsList"), {
         cardsList: [
            { reward: 125, task: "Find dad's wallet", date: Timestamp.fromDate(new Date("November 15, 2021")) },
            { reward: 100, task: "Put away old toys to white boxes on the balkoney", date: Timestamp.fromDate(new Date("November 13, 2021")) },
            { reward: 75, task: "Wash the dishes", date: Timestamp.fromDate(new Date("November 15, 2021")) },
            { reward: 50, task: "Make your bed in the morning", date: Timestamp.fromDate(new Date("November 14, 2021")) },
            { reward: 50, task: "Fix the pillowcase", date: Timestamp.fromDate(new Date("November 15, 2021")) },
            { reward: 50, task: "Water plants", date: Timestamp.fromDate(new Date("November 14, 2021")) },
         ]
      });

      dispatch(initCardsCollectionSuccess());

   } catch (e) {
      dispatch(initCardsCollectionFailure(e.message));
   }
}

export const getCardsList = () => async (dispatch) => {
   dispatch(getCardsListRequest());

   try {
      const docRef = doc(db, "cards", "cardsList");
      const docSnap = await getDoc(docRef);

      const data = docSnap.data().cardsList;
      // console.log(data);

      dispatch(getCardsListSuccess(data))
   } catch (err) {
      dispatch(getCardsListFailure(err.message))
   }
}

export const addCard = (newCard) => async (dispatch) => {
   dispatch(addCardRequest());

   try {
      const docRef = doc(db, "cards", "cardsList");

      const docSnap = await getDoc(docRef);
      const data = docSnap.data().cardsList;

      await updateDoc(docRef, {
         cardsList: [
            ...data,
            newCard,
         ]
      });

      getCardsList();

   } catch (err) {
      console.log(err.message)
   }
}