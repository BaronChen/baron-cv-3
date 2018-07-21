import { applyMiddleware, compose, createStore } from "redux"
import { IRootState, rootReducer } from "./reducer"

declare var window: any

const composeEnhancers =
  typeof window === "object" &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ }) : compose;


export const configureStore = (initialState?: IRootState) => {
  // configure middlewares
  // const middlewares = [];
  // compose enhancers
  const enhancer = composeEnhancers(
    applyMiddleware()
  );
  // create store
  return createStore(
    rootReducer,
    initialState!,
    enhancer
  );
}