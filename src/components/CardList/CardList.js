import { format } from "date-fns";
import React, { useState } from "react";
import { useParams } from "react-router";
import { Card } from "./Card/Card";
import { AddCard } from "./AddCard/AddCard";
import "./styles.scss";
import { useSelector } from "react-redux";

const today = format(new Date(), "EEEE, MMMM d");
let d = new Date();
const yesterday = format(d.setDate(d.getDate() - 1), "EEEE, MMMM d");
const beforeYesterday = format(d.setDate(d.getDate() - 2), "EEEE, MMMM d");

function compareDate(a, b) {
   if (a.date < b.date) {
      return 1;
   }
   if (a.date > b.date) {
      return -1;
   }
   return 0;
}


export const CardList = () => {
   const cards = useSelector(state => state.cards)
   const [history, setHistory] = useState(cardsHistory);
   const { id } = useParams();

   const sortedCards = cards.sort(compareDate);

   const cardsRender = (cardsArray) => {
      if (cardsArray == sortedCards) {
         return (
            <ul className="cardslist">
               { cardsArray.map((card, index) => (
                  <Card
                     key={ index }
                     reward={ card.reward }
                     task={ card.task }
                     id={ id }
                  />
               )) }
               <AddCard />
            </ul>
         )
      } else if (Object.keys(cardsArray).length == 0) {
         return (
            <div className="emptyHistory"></div>
         )
      }
      else {
         return (Object.keys(cardsArray).map(date => (
            <div key={ Math.random() }>
               <h3>{ today === date ? <span>Today</span> : "" } { date }</h3>
               <ul className="cardslist">
                  {
                     cardsArray[date].map((card, index) => (
                        <Card
                           key={ index }
                           reward={ card.reward }
                           task={ card.task }
                           id={ id }
                        />
                     ))
                  }
               </ul>
            </div>
         ))

         )
      }
   }

   if (id === 'history') { return cardsRender(history) }

   return (
      cardsRender(cards)
   )
}