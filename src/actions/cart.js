import { types } from "../types/types";
import { fetchData } from "../helpers/fetchData";
import { useState } from "react";

export const addToCart = (item) => ({
  type: types.addToCart,
  payload: item,
});

export const orderProducts = (cart, newProduct) => {
  let i = 1;
  const duplicate = cart.some((product) => product.id === newProduct.id);
  if (duplicate) {
    cart.some((product) => {
      if (product.id === newProduct.id) {
        product = null;
        newProduct.amount = ++i;
      }
    });
  }
  return (dispatch) => {
    dispatch(addToCart(newProduct));
  };
};

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

export const totalToPay = (price) => ({
  type: types.totalToPay,
  payload: price,
});
export const repeatedItemfromCart = (product) => ({
  type: types.repeatedItemfromCart,
  payload: product,
});

export const userCart = () => {};
