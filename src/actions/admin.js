import { EarnedQueryComp } from "../admin/querys/EarnedQueryComp";
import { FilterQueryComp } from "../admin/querys/FilterQueryComp";
import { MonthEarnedQueryComp } from "../admin/querys/MonthEranedQueryComp";
import { MonthlyEarned } from "../admin/querys/MonthlyEarned";
import { OrderQueryComp } from "../admin/querys/OrderQueryComp";
import { UserQuery } from "../admin/querys/UserQuery";
import { UsersQueryComp } from "../admin/querys/UsersQueryComp";
import { types } from "../types/types";

export const startLoadAdminOrders = () => {
  return async (dispatch) => {
    const adminOrders = await OrderQueryComp("orders");
    dispatch(loadAdminOrdersData(adminOrders));
  };
};

export const startLoadAdminFilterQuery = (filterParam, limit) => {
  return async (dispatch) => {
    const filterQuery = await FilterQueryComp(filterParam, limit);
    dispatch(loadAdminFilterQuery(filterQuery));
  };
};

export const startLoadAdminUsersData = () => {
  return async (dispatch) => {
    const adminUsersData = await UsersQueryComp();
    dispatch(loadAdminUsersData(adminUsersData));
  };
};

export const startLoadAdminEarnedData = () => {
  return async (dispatch) => {
    const adminEarnedData = await EarnedQueryComp();
    dispatch(loadAdminEarnedData(adminEarnedData));
  };
};

export const startLoadAdminMonthEarnedData = (filterParam) => {
  return async (dispatch) => {
    const adminMonthEarnedData = await MonthEarnedQueryComp(filterParam);
    dispatch(loadAdminMonthEarnedData(adminMonthEarnedData));
  };
};

export const startLoadAdminUsersAmountData = () => {
  return async (dispatch) => {
    const adminUsersAmount = await UserQuery();
    dispatch(loadAdminUsersAmount(adminUsersAmount));
  };
};

export const startLoadAdminMonthlyEarned = () => {
  return async (dispatch) => {
    const adminMonthlyEarned = await MonthlyEarned();
    dispatch(loadAdminMonthlyEarned(adminMonthlyEarned));
  };
};

export const loadAdminOrdersData = (adminOrders) => ({
  type: types.loadAdminOrders,
  payload: adminOrders,
});

export const loadAdminUsersData = (adminUsersData) => ({
  type: types.loadAdminUsersData,
  payload: adminUsersData,
});

export const loadAdminEarnedData = (adminEarnedData) => ({
  type: types.loadAdminEarned,
  payload: adminEarnedData,
});

export const loadAdminMonthEarnedData = (adminMonthEarnedData) => ({
  type: types.loadMonthEarned,
  payload: adminMonthEarnedData,
});

export const loadAdminFilterQuery = (filterQuery) => ({
  type: types.loadAdminFilterQuery,
  payload: filterQuery,
});

export const loadAdminUsersAmount = (usersAmount) => ({
  type: types.loadAdminUsers,
  payload: usersAmount,
});

export const loadAdminMonthlyEarned = (monthly) => ({
  type: types.loadAdminMonthEarned,
  payload: monthly,
});
