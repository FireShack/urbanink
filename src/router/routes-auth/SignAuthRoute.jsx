import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const SignAuthRoute = ({ children }) => {
  const { isLogin } = useSelector((state) => state.auth);
  return isLogin ? <Navigate to="/user/my-data" /> : children;
};
