import { doc, setDoc, addDoc, collection } from "firebase/firestore";
import db from "/src/firebase";
export const ADD_CARD = 'CARDS_LIST::ADD_CARD';

export const addCard = newCard => ({
   type: ADD_CARD,
   payload: newCard,
})

export const createCardsCollection = () => async (dispatch) => {
   try {
      const docRef = await setDoc(doc(db, "cards", "cardsList"), {
         cardsList: [
            { reward: 125, task: "Find dad's wallet", date: '15.11.21' },
            { reward: 100, task: "Put away old toys to white boxes on the balkoney", date: '15.11.21' },
            { reward: 75, task: "Wash the dishes", date: '15.11.21' },
            { reward: 50, task: "Make your bed in the morning", date: '14.11.21' },
            { reward: 50, task: "Fix the pillowcase", date: '15.11.21' },
            { reward: 50, task: "Water plants", date: '14.11.21' },
         ]
      });
      console.log("Document written with ID: ", docRef?.id);
   } catch (e) {
      console.error("Error adding document: ", e);
   }
}