import { types } from "../types/types";

const initialState = {
  isLogin: false,
  userAuthData: {
    uid: null,
    name: null,
    photo: null,
  },
  orderAuth: null,
  orderAuthId: null,
  userAuthMyData: [],
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.register:
      return {
        ...state,
        uid: action.payload.uid,
        name: action.payload.name,
      };
    case types.login:
      return {
        ...state,
        userAuthData: {
          uid: action.payload.uid,
          name: action.payload.name,
          photo: action.payload.photo,
        },
        isLogin: true,
      };

    case types.loadUserData:
      return {
        ...state,
        orderAuth: action.payload,
      };
    case types.loadUserOrderId:
      return {
        ...state,
        orderAuthId: action.payload,
      };

    case types.logout:
      return initialState;

    default:
      return state;
  }
};
