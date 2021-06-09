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

export const CardsList = () => {
   const [cards, setCards] = useState(initialCards);
   const { id } = useParams();

   return (
      <ul className="cardslist">
         { cards.map((card, index) => (
            <Card
               key={ index }
               reward={ card.reward }
               task={ card.task }
            />
         )) }
      </ul>
   )
}