import { format } from "date-fns";
import React, { useState } from "react";
import { useParams } from "react-router";
import { Card } from "./Card/Card";
import { AddCard } from "./AddCard/AddCard";
import "./styles.scss";
import { useSelector } from "react-redux";

const today = format(new Date(), "EEEE, MMMM d");
var d = new Date();
const yesterday = format(d.setDate(d.getDate() - 1), "EEEE, MMMM d");
const beforeYesterday = format(d.setDate(d.getDate() - 2), "EEEE, MMMM d");



const cardsHistory = {
   [today]: [
      { reward: 125, task: "Find dad's wallet", date: today },
      { reward: 100, task: "Put away old toys to white boxes on the balkoney", date: today },
      { reward: 75, task: "Wash the dishes", date: today },
   ],
   [yesterday]: [
      { reward: 75, task: "Wash the dishes", date: yesterday },
      { reward: 50, task: "Water plants on the second floor", date: yesterday },
   ],
   [beforeYesterday]: [
      { reward: 100, task: "Help grandma with shopping", date: beforeYesterday },
      { reward: 50, task: "Water plants", date: beforeYesterday },
   ]
}


export const CardList = () => {
   const cards = useSelector(state => state.cards)
   const [history, setHistory] = useState(cardsHistory);
   const { id } = useParams();

   const cardsRender = (cardsArray) => {
      if (cardsArray == cards) {
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