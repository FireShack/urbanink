import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CheckoutStepsComp } from "./CheckoutStepsComp";
import { TotalComp } from "./TotalComp";
import { UserDataFormComp } from "./UserDataFormComp";

export const FinalPaymentComp = () => {
  const { userData } = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const handleRedirect = () => {
    navigate("/checkout/user/payment/pay", { replace: true });
  };

  return (
    <div className="container mt-4">
      <div className="mt-4">
        <CheckoutStepsComp />
      </div>
      <div className="row">
        <div className="col-12 col-md-6">
          <UserDataFormComp />
        </div>
        <div className="col-12 col-md-6">
          <TotalComp />
        </div>
      </div>
      <div className="row mt-2">
        {userData.complete ? (
          <button
            className="btn btn-outline-dark rounded-0 w-100"
            onClick={handleRedirect}
          >
            Next Step
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
