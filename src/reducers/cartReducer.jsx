import { types } from "../types/types";

const initialState = {
  payed: false,
  orderId: null,
  date: [
    {
      day: "",
      month: "",
      year: "",
    },
  ],
  product: [],
  amount: null,
  cart: [],
  total: null,
  userOrder: null,
  userData: {
    name: "",
    mail: "",
    prefix: "",
    phone: "",
    country: "",
    city: "",
    zip: "",
    street: "",
    house_number: "",
    notes: "",
    complete: false,
  },
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
    case types.total:
      return {
        ...state,
        total: action.payload,
      };
    case types.repeatedItemfromCart:
      return {
        ...state,
        total: [...state.cart, action.payload],
      };
    case types.userData:
      return {
        ...state,
        userData: {
          name: action.payload.name,
          mail: action.payload.mail,
          prefix: action.payload.prefix,
          phone: action.payload.phone,
          country: action.payload.country,
          city: action.payload.city,
          zip: action.payload.zip,
          street: action.payload.street,
          house_number: action.payload.house_number,
          notes: action.payload.notes,
          complete: action.payload.complete,
        },
      };

    case types.payed:
      return {
        ...state,
        payed: action.payload,
      };
    case types.orderId:
      return {
        ...state,
        orderId: action.payload,
      };
    case types.orderDate:
      return {
        ...state,
        date: [
          {
            day: action.payload.day,
            month: action.payload.month,
            year: action.payload.year,
          },
        ],
      };
    case types.order:
      return {
        ...state,
        userOrder: action.payload,
      };
    case types.cleanCart:
      return {
        ...state,
        cart: action.payload,
      };
    case types.cleanUserData:
      return {
        ...state,
        userData: {
          name: "",
          mail: "",
          prefix: "",
          phone: "",
          country: "",
          city: "",
          zip: "",
          street: "",
          house_number: "",
          notes: "",
          complete: false,
        },
      };

    default:
      return state;
  }
};
