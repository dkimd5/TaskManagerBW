import React, { useState } from "react";
import { format } from "date-fns";
import { createMachine } from 'xstate';
import { useMachine } from '@xstate/react';
import { useDispatch } from "react-redux";
import "./styles.scss";
import { addCard } from "../../../store/cards/actions";

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

   const dispatch = useDispatch();

   const [current, send] = useMachine(addCardMachine);
   const [text, setText] = useState("");
   const [reward, setReward] = useState("");

   const handleChangeText = (e) => {
      setText(e.target.value);
   }

   const handleChangeReward = (e) => {
      setReward(e.target.value);
   }

   const handleAddCard = () => {
      if (text && reward) {
         dispatch(addCard({
            reward: +reward,
            task: text,
            date: format(new Date(), 'EEEE, dd MMMM')
         }))
         setText('');
         setReward('');
      }
   }

   return (
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
                  <form>
                     <label htmlFor="cardText">Title</label>
                     <input
                        value={ text }
                        id="cardText"
                        type="text"
                        onChange={ handleChangeText }
                     >
                     </input>
                     <label htmlFor="cardReward">Reward</label>
                     <input
                        value={ reward }
                        id="cardReward"
                        type="text"
                        onChange={ handleChangeReward }
                     >
                     </input>
                  </form>
               </div>
               <button>Cancel</button>
               <button onClick={ handleAddCard }>Create</button>
            </li>
         }
      </>
      // </li>
   )
}