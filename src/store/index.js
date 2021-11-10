import { createStore } from "redux";
import { combRed } from "./reducers";
import "regenerator-runtime/runtime";

export const store = createStore(
   combRed
);