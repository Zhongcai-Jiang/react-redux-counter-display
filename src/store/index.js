// Necessities and accessories for constructing our Redux store;
import { combineReducers, createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";

// Individual reducers altogether under an alias;
import * as reducers from "../reducers";

// Construct our Redux store;
const rootReducer = combineReducers(reducers);
const logger = createLogger({ collapsed: true });
const middleware = composeWithDevTools(applyMiddleware(logger));
const store = createStore(rootReducer, middleware); // 2nd arg: middleware;

// Export our store by default, which will be provided to and injected within our entire application;
export default store;