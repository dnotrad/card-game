import { createStore, combineReducers, applyMiddleware } from "redux";
import { mainReducer } from "./mainReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
let rootReducer = combineReducers({ mainReducer });

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
