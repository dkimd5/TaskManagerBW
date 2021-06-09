import React, { useState } from "react";
import "./reset.css";
import { CardsList } from "./CardsList";
import {
   BrowserRouter as Router,
   Switch,
   Route,
   Link
} from "react-router-dom";




export const App = () => {



   return (
      <Router>
         <ul>
            <li>
               <Link to='/todayshousework'>Today’s housework</Link>
            </li>
            <li>
               <Link to='/history'>History</Link>
            </li>
         </ul>

         <Switch>
            <Route path='/' exact>
               <CardsList />
            </Route>
            <Route path='/:id'>
               <CardsList />
            </Route>
         </Switch>


      </Router>
   );
}