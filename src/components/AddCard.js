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
      // <li className="addCard">
      <>
         {
            current.matches("addcard") &&
            <li
               className="addCard"
               onClick={ () => { send('START_CARD') } }
            >
            </li>
         }
         {
            current.matches("cardoptions") &&
            <li className="card-options">
               <div className="card-options-wrp">
                  <h3>New housework task</h3>
                  <label for="cardText">Title</label>
                  <input id="cardText" type="text"></input>
                  <label for="cardReward">Reward</label>
                  <input id="cardReward" type="text"></input>
               </div>
               <button>Cancel</button>
               <button>Create</button>
            </li>
         }
      </>
      // </li>
   )
}