import React from "react";
import { BsCheckCircle, BsCheckCircleFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
export const CheckoutStepsComp = () => {
  const location = useLocation();
  const { userData, payed } = useSelector((state) => state.cart);
  return (
    <div className="mt-5 mt-md-2">
      <div className="row">
        <div className="col-3 text-center mt-5">
          <p>Your cart</p>
        </div>
        <div className="col-3 text-center mt-5">
          {
            <p
              className={
                location.pathname === "/checkout/user/your-data" ? "fw-bold" : ""
              }
            >
              Give us some information
            </p>
          }
        </div>
        <div className="col-3 text-center mt-5  ">
          <p
            className={
              location.pathname === "/checkout/user/payment/pay"
                ? "fw-bold"
                : ""
            }
          >
            Payment
          </p>
        </div>
        <div className="col-3 text-center mt-5  ">
          <p
            className={
              location.pathname === "/checkout/user/payed/your-order"
                ? "fw-bold"
                : ""
            }
          >
            Your order
          </p>
        </div>
      </div>

      <div className="row">
        <div className="col-3 d-flex justify-content-center align-items-center">
          <div className="">
            {location.pathname === "/checkout/user/your-data" ? (
              <BsCheckCircleFill />
            ) : (
              <BsCheckCircleFill />
            )}
          </div>
        </div>
        <div className="col-3 d-flex justify-content-center align-items-center">
          <div className="">
            {userData.complete ? <BsCheckCircleFill /> : <BsCheckCircle />}
          </div>
        </div>
        <div className="col-3 d-flex justify-content-center align-items-center">
          <div className="">
            {payed ? <BsCheckCircleFill /> : <BsCheckCircle />}
          </div>
        </div>
        <div className="col-3 d-flex justify-content-center align-items-center">
          <div className="">
            {location.pathname === "/checkout/user/payed/your-order" ? (
              <BsCheckCircleFill />
            ) : (
              <BsCheckCircle />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
