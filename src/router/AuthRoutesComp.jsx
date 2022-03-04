import { Routes, Route } from "react-router-dom";
import { LoginComp } from "../componentes/auth/LoginComp";
import { RegisterComp } from "../componentes/auth/RegisterComp";

export const AuthRoutesComp = () => {
  return (
    <Routes>
      <Route path="*" element={<LoginComp />} />
      <Route path="register" element={<RegisterComp />} />
    </Routes>
  );
};
