import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { combRed } from "./reducers/reducers";
import "regenerator-runtime/runtime";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
   combRed,
   composeEnhancers(applyMiddleware(thunk)),
);