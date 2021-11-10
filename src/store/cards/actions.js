export const ADD_CARD = 'CARDS_LIST::ADD_CARD';
// export const COMPLITE_CARD = 'CARDS_:LIST::DELETE_CHAT';

export const addCard = newCard => ({
   type: ADD_CARD,
   payload: newCard,
})