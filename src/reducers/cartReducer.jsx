import { types } from "../types/types";

const initialState = {
  id: null,
  product: [],
  amount: null,
  cart: [],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.addToCart:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case types.loadProducts:
      return {
        ...state,
        product: [...action.payload],
      };
    case types.userCart:
      return {
        cart: [],
      };

    case types.RemovefromCart:
      return {
        ...state,
        cart: state.cart.filter((product) => product.id !== action.payload),
      };

    default:
      return state;
  }
};
