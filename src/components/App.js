import React, { useState } from "react";
import { Card } from "./Card";
import "./reset.css";
import "./App.scss";

const initialCards = [
   { points: 125, task: "Find dad's wallet" },
   { points: 100, task: "Put away old toys to white boxes on the balkoney" },
   { points: 75, task: "Wash the dishes" },
   { points: 50, task: "Make your bed in the morning" },
   { points: 50, task: "Fix the pillowcase" },
   { points: 50, task: "Water plants" },
];

export const App = () => {

   const [cards, setCards] = useState(initialCards);

   return (
      <ul className="cardslist">
         { cards.map((card, index) => (
            <Card key={ index } points={ card.points } task={ card.task } />
         )) }
      </ul>
   );
}