import React from "react";
import { Route, Routes } from "react-router-dom";
import { NavbarComp } from "../componentes/navbar/NavbarComp";
import { UserDataComp } from "../componentes/user/UserDataComp";
import { UserFavouritesComp } from "../componentes/user/UserFavouritesComp";
import { UserOrdersComp } from "../componentes/user/UserOrdersComp";

export const UserDataRouteComp = () => {
  return (
    <>
      <NavbarComp />
      <Routes>
        <Route path="*" element={<UserDataComp />} />
        <Route path="my-data" element={<UserDataComp />} />
        <Route path="my-orders" element={<UserOrdersComp />} />
        <Route path="my-favourites" element={<UserFavouritesComp />} />
      </Routes>
    </>
  );
};
