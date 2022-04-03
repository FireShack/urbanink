import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const OrderAuthRoute = ({ children }) => {
  const { userOrder } = useSelector((state) => state.cart);
  return userOrder !== null ? (
    children
  ) : (
    <Navigate to="/" />
  );
};
