import {applyMiddleware, compose, createStore} from "redux";
import rootReducer from "./reducer";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";

const composeFunc = process.env.NODE_ENV === 'development' ? composeWithDevTools : compose;
const composeEnhancers = composeFunc(applyMiddleware(thunk));
const initialState = {};
const store = createStore(rootReducer(), initialState, composeEnhancers);


export default store;
