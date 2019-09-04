export const ADD_PRODUCT = "ADD_PRODUCT";
export const GET_PRODUCTS = "GET_PRODUCTS";

const initialState = {
  isWrite : false
}


export default function reducer(state = initialState, action = {} ) {
  switch(action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        isWrite: true
      }
    default: 
      return state
  }
}

export const addProduct = (name, price, description) => ({
  type: ADD_PRODUCT,
  payload: {
    name,
    price,
    description
  } 
})

export const getProducts = () => ({
  type: GET_PRODUCTS
})