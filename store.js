import { applyMiddleware, compose, createStore } from "redux"
import { thunk } from "redux-thunk";
import rootReducer from "./src/Services/Reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancers=composeEnhancers(
    applyMiddleware(thunk),
    // other store enhancers if any
  );
export const store=createStore(
    rootReducer,
    enhancers
)

