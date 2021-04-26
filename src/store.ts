import { createStore } from "redux";
import { postReducer } from "./postReducer";

export const store = createStore(postReducer)