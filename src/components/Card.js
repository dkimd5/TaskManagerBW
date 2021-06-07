import React, { useCallback, useState } from "react";
import "./Card.scss"
import { createMachine } from 'xstate';
import { useMachine } from '@xstate/react';


//FSM-------------------------------------------------------------------
const cardMachine = createMachine({
   id: 'cardMachine',
   initial: 'frontside',
   states: {
      frontside: {
         on: {
            TOGGLE: 'backside',
         }
      },
      backside: {
         on: {
            FINISH_TASK: 'taskcomplite',
            BACK_TO_TASK: 'frontside'
         }
      },
      taskcomplite: {},
   }
})
//FSM-------------------------------------------------------------------

export const Card = ({ reward, task }) => {

   const [current, send] = useMachine(cardMachine);

   const [toggleClass, setToggleClass] = useState({ active: false });

   const toggleClassFunc = useCallback(() => {
      setToggleClass({ active: !toggleClass.active })
      console.log(toggleClass.active)
   }, [toggleClass]);

   const cardColor = () => {
      if (reward >= 10 && reward < 75) {
         return "lowest-reward";
      } else if (reward < 100) {
         return "low-reward";
      } else if (reward < 125) {
         return "high-reward";
      } else if (reward >= 125) {
         return "highest-reward";
      } else {
         return "";
      }
   }

   return (
      <li className={ `carditem ${cardColor()} ${toggleClass.active ? 'is-flipped' : null} ` }>
         {
            current.matches("frontside") &&
            <div
               onClick={ () => { send('TOGGLE'); toggleClassFunc() } }
               className='carditem-front'
            >
               <div className="carditem-reward-wrp">
                  <span className="carditem-reward" >{ reward }</span>
               </div>
               <p className="carditem-text">{ task }</p>
            </div>
         }
         {
            current.matches("backside") &&
            <div className='carditem-back'>
               <button
                  onClick={ () => { send('BACK_TO_TASK'); toggleClassFunc() } }
               >
                  Not done
                  </button>
               <button
                  onClick={ () => { send('FINISH_TASK') } }
               >
                  Done
                  </button>
            </div>
         }
         {current.matches("taskcomplite") &&
            <div className='carditem-complite'>
               <span>Well Done</span>
            </div>
         }
      </li>
   )
}