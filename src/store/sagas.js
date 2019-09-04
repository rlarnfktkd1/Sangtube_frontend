import {fork} from "redux-saga/effects"

import Products from "./Products/Products.saga";

export default function* root() {
  yield fork(Products);
}