import React from "react";
import "./Card.scss"

export const Card = ({ reward, task }) => {

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
      <li className={ `carditem ${cardColor()}` }>
         <div className="carditem-reward-wrp">
            <span className="carditem-reward" >{ reward }</span>
         </div>
         <p className="carditem-text">{ task }</p>
      </li>
   )
}