export const ADD_CARD = 'CARDS_LIST::ADD_CARD';

export const addCard = newCard => ({
   type: ADD_CARD,
   payload: newCard,
})