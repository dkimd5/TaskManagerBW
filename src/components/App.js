import React from "react";
import "./reset.css";
import { CardList } from "./CardList/CardList";
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
               <CardList />
            </Route>
            <Route path='/:id'>
               <CardList />
            </Route>
         </Switch>


      </Router>
   );
}