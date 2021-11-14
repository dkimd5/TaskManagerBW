export const MOVE_CARD_TO_HISTORY = 'CARDS_HISTORY::MOVE_CARD_TO_HISTORY';

export const moveCardToHistory = card => ({
   type: MOVE_CARD_TO_HISTORY,
   payload: card,
})