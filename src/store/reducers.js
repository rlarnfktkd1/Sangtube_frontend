import { connectRouter } from "connected-react-router";
import {combineReducers} from "redux";

import counter from "./Counter/Counter.store";
import products from "./Products/Products.store";
import {reducer as formReducer } from "redux-form"

const reducers = {
  form: formReducer,
  counter,
  products
}

export default (history) => 
  combineReducers({
    router: connectRouter(history),
    ...reducers,
    counter,
    products
})