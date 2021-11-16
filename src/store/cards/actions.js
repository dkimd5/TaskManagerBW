import { doc, setDoc, getDoc, Timestamp } from "firebase/firestore";
import db from "/src/firebase";

export const ADD_CARD = 'CARD_LIST::ADD_CARD';
export const CARD_COLLECTION_INIT = 'CARD_LIST::CARD_COLLECTION_INIT';
export const CARD_COLLECTION_INIT_SUCCESS = 'CARDS_LIST::CARD_COLLECTION_INIT_SUCCESS';
export const CARD_COLLECTION_INIT_FAILURE = 'CARDS_LIST::CARD_COLLECTION_INIT_FAILURE';
export const CARD_COLLECTION_GET_REQUEST = 'CARD_LIST::CARD_COLLECTION_GET_REQUEST';
export const CARD_COLLECTION_GET_SUCCESS = 'CARD_LIST::CARD_COLLECTION_GET_SUCCESS';
export const CARD_COLLECTION_GET_FAILURE = 'CARD_LIST::CARD_COLLECTION_GET_FAILURE';


export const addCard = newCard => ({
   type: ADD_CARD,
   payload: newCard,
})

export const cardCollectionInit = () => ({
   type: CARD_COLLECTION_INIT,
})

export const cardCollectionInitFailure = (error) => ({
   type: CARD_COLLECTION_INIT_FAILURE,
   payload: error,
})

export const cardCollectionInitSuccess = () => ({
   type: CARD_COLLECTION_INIT_SUCCESS,
})

export const cardCollectionGetRequest = () => ({
   type: CARD_COLLECTION_INIT,
})

export const cardCollectionGetFailure = (error) => ({
   tyep: CARD_COLLECTION_GET_FAILURE,
   payload: error,
})

export const cardCollectionGetSuccess = (cardList) => ({
   type: CARD_COLLECTION_GET_SUCCESS,
   payload: cardList,
})

export const initCardCollection = () => async (dispatch) => {
   dispatch(cardCollectionInit())

   try {
      const docRef = await setDoc(doc(db, "cards", "cardsList"), {
         cardsList: [
            { reward: 125, task: "Find dad's wallet", date: Timestamp.fromDate(new Date("November 15, 2021")) },
            { reward: 100, task: "Put away old toys to white boxes on the balkoney", date: Timestamp.fromDate(new Date("November 13, 2021")) },
            { reward: 75, task: "Wash the dishes", date: Timestamp.fromDate(new Date("November 15, 2021")) },
            { reward: 50, task: "Make your bed in the morning", date: Timestamp.fromDate(new Date("November 14, 2021")) },
            { reward: 50, task: "Fix the pillowcase", date: Timestamp.fromDate(new Date("November 15, 2021")) },
            { reward: 50, task: "Water plants", date: Timestamp.fromDate(new Date("November 14, 2021")) },
         ]
      });

      dispatch(cardCollectionInitSuccess())
      console.log("Document written with ID: ", docRef?.id);
   } catch (e) {
      dispatch(cardCollectionInitFailure(e.message))
      console.error("Error adding document: ", e);
   }
}

export const getCardCollection = () => async (dispatch) => {
   dispatch(cardCollectionGetRequest());

   try {
      const docRef = doc(db, "cards", "cardsList");
      const docSnap = await getDoc(docRef);

      const data = docSnap.data().cardsList;
      console.log(data);

      dispatch(cardCollectionGetSuccess(data))
   } catch (err) {
      dispatch(cardCollectionGetFailure(err.message))
   }
}