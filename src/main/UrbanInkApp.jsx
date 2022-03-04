import React from "react";
import { Provider } from "react-redux";
import { RouterMainComp } from "../router/RouterMainComp";
import { store } from "../store/store";
export const UrbanInkApp = () => {
  return (
    <Provider store={store}>
      <RouterMainComp />
    </Provider>
  );
};
