import {fork, take, call } from "redux-saga/effects";

import youtubeService from "../../services/youtubeService";
import {ADD_PRODUCT, GET_PRODUCTS} from "./Products.store";

/********************************************************************************
 *  제너레이터 함수
 ********************************************************************************/
export function* requestGetProductsApi() {
  try {
    const result = yield call(youtubeService.getProducts);
    
    console.log(result);
  } catch(e) {
    console.log(e);
  }
}

export function* requestAddProductApi(data) {
  try {
    const result = yield call(youtubeService.addProduct, {
      name: data.name,
      price: data.price,
      description: data.description
    })

    console.log(result);
  } catch(e) {
    console.log(e)
  }
}


/********************************************************************************
 *  call
 ********************************************************************************/
export function* watchRequestGetProducts() {
  while(true) {
    yield take(GET_PRODUCTS)
    yield call(requestGetProductsApi);
  }
}

export function* watchRequestAddProduct() {
  while(true) {
    const {payload} = yield take(ADD_PRODUCT);
    yield call(requestAddProductApi, payload)
  }
}

/********************************************************************************
 *  watch
 ********************************************************************************/
export default function*() {
  yield fork(watchRequestGetProducts);
  yield fork(watchRequestAddProduct);
}