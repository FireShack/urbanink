import { types } from "../types/types";

const initialState = {
  msg: null,
  loading: null,
  show: false,
};

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.AddMsg:
      return {
        ...state,
        msg: action.payload,
      };
    case types.RemoveMsg:
      return {
        ...state,
        msg: null,
      };
    case types.showElement:
      return {
        ...state,
        show: true,
      };
    case types.closeElement:
      return {
        ...state,
        show: false,
      };

    default:
      return state;
  }
};
