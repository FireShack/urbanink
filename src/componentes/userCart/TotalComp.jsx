import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { total } from "../../actions/cart";

export const TotalComp = () => {
  const dispatch = useDispatch();
  const { cart, payed } = useSelector((state) => state.cart);
  const subTotal = cart.map((product) => {
    return product.amount * product.price;
  });
  const TotalToPay = subTotal.reduce((a, b) => a + b, 0);
  const tax = (10 * TotalToPay) / 100;
  const finalAmount = TotalToPay + tax;

  useEffect(() => {
    dispatch(total(finalAmount.toFixed(2)));
  }, [dispatch, finalAmount]);

  return (
    <>
      <div className="row mt-3 mb-3">
        <div className="col-12">
          <p className="p-1 fs-4 text-center">
            {payed ? "Payed:" : "Total to pay"}
          </p>
        </div>
        <div className="col-12 border mt-2">
          <div className="row border-bottom mt-2">
            <div className="col-6">
              <p className="fw-bold">Subtotal </p>
            </div>
            <div className="col-6">
              <p className="">$ {TotalToPay.toFixed(2)}</p>
            </div>
          </div>
          <div className="row border-bottom mt-2">
            <div className="col-6">
              <p className="fw-bold">Tax </p>
            </div>
            <div className="col-6">
              <p className="">$ {tax.toFixed(2)}</p>
            </div>
          </div>
          <div className="row border-bottom mt-2">
            <div className="col-6">
              <p className="fw-bold">Shipping </p>
            </div>
            <div className="col-6">
              <p className="text-muted">free</p>
            </div>
          </div>
          <div className="row border-bottom mt-2">
            <div className="col-6">
              <p className="fw-bold">Total </p>
            </div>
            <div className="col-6">
              <p className="">$ {finalAmount.toFixed(2)}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
