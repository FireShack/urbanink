import React from "react";
import { Route, Routes } from "react-router-dom";
import { NavbarComp } from "../componentes/navbar/NavbarComp";
import { CheckoutScreen } from "../componentes/userCart/CheckoutScreen";
import { FinalPaymentComp } from "../componentes/userCart/FinalPaymentComp";
import { StripePayForm } from "../componentes/userCart/StripePayForm";
export const UserCheckoutComp = () => {
  return (
    <>
      <NavbarComp />
      <Routes>
        <Route path="user/your-cart" element={<CheckoutScreen />} />
        <Route path="user/your-data" element={<FinalPaymentComp />} />
        <Route path="user/payment/pay" element={<StripePayForm />} />
      </Routes>
    </>
  );
};
