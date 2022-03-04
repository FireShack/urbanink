import { types } from "../types/types";
import { fetchData } from "../helpers/fetchData";

export const addToCart = (item) => ({
  type: types.addToCart,
  payload: item,
});

export const startFetchData = () => {
  return async (dispatch) => {
    const products = await fetchData();
    dispatch(loadProducts(products));
  };
};

export const loadProducts = (products) => ({
  type: types.loadProducts,
  payload: products,
});

export const RemovefromCart = (id) => ({
  type: types.RemovefromCart,
  payload: id,
});

export const userCart = () => {};
