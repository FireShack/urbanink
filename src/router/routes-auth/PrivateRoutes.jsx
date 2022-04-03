import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const PrivateRoutes = ({children}) => {
  const { cart } = useSelector((state) => state.cart);

  return cart.length > 0 ? children  : <Navigate to="/" />
};
