import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { adminReducer } from "../reducers/adminReducer";
import { authReducer } from "../reducers/authReducer";
import { cartReducer } from "../reducers/cartReducer";
import { uiReducer } from "../reducers/uiReducer";

const reducers = combineReducers({
  auth: authReducer,
  cart: cartReducer,
  ui: uiReducer,
  admin: adminReducer,
});

export const store = createStore(reducers, applyMiddleware(thunk));
