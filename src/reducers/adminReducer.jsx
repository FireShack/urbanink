import { types } from "../types/types";

const initialState = {
  adminOrders: [],
  adminFilterQuery: [],
  adminUsersData: [],
  adminEarnedData: [],
  adminMonthEarnedData: [],
  adminUsersAmount: [],
  adminMonthlyEarned: [],
};

export const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.loadAdminOrders:
      return {
        ...state,
        adminOrders: [...action.payload],
      };
    case types.loadAdminFilterQuery:
      return {
        ...state,
        adminFilterQuery: [...action.payload],
      };
    case types.loadAdminUsersData:
      return {
        ...state,
        adminUsersData: [...action.payload],
      };
    case types.loadAdminEarned:
      return {
        ...state,
        adminEarnedData: [...action.payload],
      };
    case types.loadMonthEarned:
      return {
        ...state,
        adminMonthEarnedData: [...action.payload],
      };
    case types.loadAdminUsers:
      return {
        ...state,
        adminUsersAmount: [...action.payload],
      };
    case types.loadAdminMonthEarned:
      return {
        ...state,
        adminMonthlyEarned: [...action.payload],
      };

    default:
      return state;
  }
};
