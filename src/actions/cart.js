import { types } from "../types/types";
import { fetchData } from "../helpers/fetchData";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase/firebase-config";
import axios from "axios";

export const addToCart = (item) => ({
  type: types.addToCart,
  payload: item,
});

export const orderProducts = (cart, newProduct) => {
  let i = 1;
  const duplicate = cart.some((product) => product.id === newProduct.id);
  if (duplicate) {
    return cart.some((product) => {
      if (product.id === newProduct.id) {
        product = null;
        newProduct.amount = ++i;
      }
      return "";
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
export const cleanCart = () => ({
  type: types.cleanCart,
  payload: [],
});

export const RemovefromCart = (id) => ({
  type: types.RemovefromCart,
  payload: id,
});

export const AddUserOrder = (products) => ({
  type: types.order,
  payload: products,
});

export const fillOrderId = (orderId) => ({
  type: types.orderId,
  payload: orderId,
});

export const totalToPay = (price) => ({
  type: types.totalToPay,
  payload: price,
});

export const total = (price) => ({
  type: types.total,
  payload: price,
});

export const repeatedItemfromCart = (product) => ({
  type: types.repeatedItemfromCart,
  payload: product,
});

export const payedState = (state) => ({
  type: types.payed,
  payload: state,
});

export const fillUserData = (
  name,
  mail,
  prefix,
  phone,
  country,
  city,
  zip,
  street,
  house_number,
  notes
) => ({
  type: types.userData,
  payload: {
    name,
    mail,
    prefix,
    phone,
    country,
    city,
    zip,
    street,
    house_number,
    notes,
    complete: true,
  },
});

export const fillOrderDate = (day, month, year) => ({
  type: types.orderDate,
  payload: { day, month, year },
});

export const saveData = () => {
  return async (dispatch, getState) => {
    const { userAuthData } = getState().auth;
    const date = new Date().toDateString();
    const dateMonth = new Date().getMonth() + 1;
    const { userOrder, orderId, userData, total } = getState().cart;
    const docRef = await addDoc(
      collection(db, `users/${userAuthData.uid}/purchases`),
      {
        date: date,
        orderId: orderId,
        order: userOrder,
        shipped: false,
        userId: userAuthData.uid,
        problems: [
          {
            exists: false,
            descritption: "",
          },
        ],
      }
    );
    const docRefUser = await addDoc(collection(db, `orders`), {
      order: userOrder,
      user: userData,
      orderId: orderId,
      date: date,
      shipped: false,
      userId: userAuthData.uid,
      problems: [
        {
          exists: false,
          descritption: "",
        },
      ],
      earned: total,
    });
    const docRefTotal = await addDoc(collection(db, `orders/earned/total`), {
      earned: total,
      month: dateMonth,
    });
    console.log(docRef.id, docRefUser.id, docRefTotal.id);
  };
};

export const cleanUserData = () => ({
  type: types.cleanUserData,
});

export const loadDeleteAdminProduct = (id) => {
  return async (dispatch) => {
    dispatch(deleteAdminproduct(id));
    await axios.delete(`http://localhost:4005/all-data/${id}`);
  };
};

export const deleteAdminproduct = (id) => ({
  type: types.deleteAdminProduct,
  payload: id,
});

export const userCart = () => {};
