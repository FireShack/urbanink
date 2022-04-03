import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const UserAuthRoute = ({ children }) => {
  const { isLogin } = useSelector((state) => state.auth);
  return isLogin ? children : <Navigate to="/auth/login" />;
};
