import { types } from "../types/types";

const initialState = {
  userName: null,
  password: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.login:
      return {};

    case types.logout:
      return {};

    default:
      return state;
  }
};
