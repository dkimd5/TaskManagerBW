import React from "react";
import "./Card.scss"

export const Card = ({ points, task }) => {

   const cardColor = () => {
      if (points >= 10 && points < 75) {
         return "lowest-points";
      } else if (points < 100) {
         return "low-points";
      } else if (points < 125) {
         return "high-points";
      } else if (points >= 125) {
         return "highest-points";
      } else {
         return "";
      }
   }

   return (
      <li className={ `carditem ${cardColor()}` }>
         <span className="carditem-points" >{ points }</span>
         <p className="carditem-text">{ task }</p>
      </li>
   )
}