import React from "react";
import { createMachine } from 'xstate';
import { useMachine } from '@xstate/react';
import "./AddCard.scss";

//FSM-------------------------------------------------------------------
const addCardMachine = createMachine({
   id: 'addCardMahcine',
   initial: 'addcard',
   states: {
      addcard: {
         on: {
            START_CARD: 'cardoptions'
         }
      },
      cardoptions: {
         on: {
            CANCEL: 'addcard',
            ADD_CARD: 'cardadded'
         }
      },
      cardadded: {},
   }
})
//FSM-------------------------------------------------------------------

export const AddCard = () => {

   const [current, send] = useMachine(addCardMachine);

   return (
      <li className="addCard">
         {
            current.matches("addcard") && 
            <div className="addCard-plus"></div>
         }
      </li>
   )
}