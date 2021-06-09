import React, { useState } from "react";
import { useParams } from "react-router";
import { Card } from "./Card";
import "./CardsList.scss";

const initialCards = [
   { reward: 125, task: "Find dad's wallet" },
   { reward: 100, task: "Put away old toys to white boxes on the balkoney" },
   { reward: 75, task: "Wash the dishes" },
   { reward: 50, task: "Make your bed in the morning" },
   { reward: 50, task: "Fix the pillowcase" },
   { reward: 50, task: "Water plants" },
];

const cardsHistory = [
   { reward: 125, task: "Find dad's wallet" },
   { reward: 100, task: "Put away old toys to white boxes on the balkoney" },
   { reward: 75, task: "Wash the dishes" },
]

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
            />
         )) }
      </ul>
   )

   if (id === 'history') { return cardsRender(history) }

   return (
      cardsRender(cards)
   )
}