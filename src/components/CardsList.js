import { format } from "date-fns";
import React, { useState } from "react";
import { useParams } from "react-router";
import { Card } from "./Card";
import "./CardsList.scss";

const today = format(new Date(), "EEEE, MMMM d");
var d = new Date();
const yesterday = format(d.setDate(d.getDate() - 1), "EEEE, MMMM d");
const beforeYesterday = format(d.setDate(d.getDate() - 2), "EEEE, MMMM d");

console.log(yesterday)

const initialCards = [
   { reward: 125, task: "Find dad's wallet", date: today },
   { reward: 100, task: "Put away old toys to white boxes on the balkoney", date: today },
   { reward: 75, task: "Wash the dishes", date: today },
   { reward: 50, task: "Make your bed in the morning", date: yesterday },
   { reward: 50, task: "Fix the pillowcase", date: yesterday },
   { reward: 50, task: "Water plants", date: yesterday },
];

const cardsHistory = {
   [today]: [
      { reward: 125, task: "Find dad's wallet" },
      { reward: 100, task: "Put away old toys to white boxes on the balkoney" },
      { reward: 75, task: "Wash the dishes" },
   ],
   [yesterday]: [
      { reward: 75, task: "Wash the dishes" },
      { reward: 50, task: "Water plants on the second floor" },
   ],
   [beforeYesterday]: [
      { reward: 100, task: "Help grandma with shopping" },
      { reward: 50, task: "Water plants" },
   ]
}


export const CardsList = () => {
   const [cards, setCards] = useState(initialCards);
   const [history, setHistory] = useState(cardsHistory);
   const { id } = useParams();



   const cardsRender = (cardsArray) => (
      <ul className="cardslist">
         { cardsArray.map((card, index) => (
            <Card
               key={ index }
               reward={ card.reward }
               task={ card.task }
               id={ id }
            />
         )) }
      </ul>
   )

   if (id === 'history') { return cardsRender(history) }

   return (
      cardsRender(cards)
   )
}