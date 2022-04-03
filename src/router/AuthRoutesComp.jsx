import { Routes, Route } from "react-router-dom";
import { LoginComp } from "../componentes/auth/LoginComp";
import { RegisterComp } from "../componentes/auth/RegisterComp";
import { NavbarComp } from "../componentes/navbar/NavbarComp";

export const AuthRoutesComp = () => {
  return (
    <>
    <NavbarComp />
    <Routes>
      <Route path="*" element={<LoginComp />} />
      <Route path="register" element={<RegisterComp />} />
    </Routes>
    </>
  );
};
