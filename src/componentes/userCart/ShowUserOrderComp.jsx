import React from "react";
import { Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { cleanUserData, fillOrderId, payedState } from "../../actions/cart";
import { CheckoutStepsComp } from "./CheckoutStepsComp";
import { AiFillHome } from "react-icons/ai";

export const ShowUserOrderComp = () => {
  const { userData, userOrder, payed, orderId } = useSelector(
    (state) => state.cart
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const subTotal = userOrder.map((product) => {
    return product.amount * product.price;
  });
  const TotalToPay = subTotal.reduce((a, b) => a + b, 0);
  const tax = (10 * TotalToPay) / 100;
  const finalAmount = TotalToPay + tax;

  const handleRestart = async () => {
    navigate("/", { replace: true });
    dispatch(fillOrderId(null));
    dispatch(payedState(false));
    dispatch(cleanUserData());
  };

  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col">
          <button
            className="btn btn-outline-dark rounded-0 w-100 d-flex align-items-center justify-content-center"
            onClick={handleRestart}
          >
            <AiFillHome />
            Go home
          </button>
        </div>
      </div>
      <CheckoutStepsComp />
      <div className="row mt-5">
        <div className="col-12 text-center">
          <Alert variant="success">
            Congratulations <span className="fw-bold">{userData.name}</span>,
            your order is on the way!
          </Alert>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-12 text-center">
          <Alert variant="secondary">
            We've sent an email to{" "}
            <span className="fw-bold">{userData.mail}</span> with all this data
          </Alert>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <p className="p-1 fs-4 text-center">Your order details: </p>
        </div>
      </div>
      <div className="row mt-3">
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th className="col text-center">Product's image</th>
                <th className="col text-center">Product's Name</th>
                <th className="col text-center">Amount</th>
                <th className="col text-center">Price</th>
              </tr>
            </thead>
            <tbody>
              {userOrder.map((products) => {
                return (
                  <tr key={products.id}>
                    <td className="d-flex justify-content-center">
                      <img
                        src={`${products.img}`}
                        style={{ height: "15rem" }}
                        alt="product"
                      />
                    </td>
                    <td>
                      <p className="text-center">{products.title}</p>
                    </td>
                    <td>
                      <p className="text-center">{products.amount}</p>
                    </td>
                    <td>
                      <p className="text-center">${products.price}</p>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-12">
          <p className="p-1 fs-4 text-center">Shipping data </p>
        </div>
        <div className="col-12 border">
          <div className="row border-bottom mt-2">
            <div className="col-6">
              <p className="fw-bold">Order's Number </p>
            </div>
            <div className="col-6">
              <p className="">{orderId}</p>
            </div>
          </div>
          <div className="row border-bottom mt-2">
            <div className="col-6">
              <p className="fw-bold">Country </p>
            </div>
            <div className="col-6">
              <p className="">{userData.country}</p>
            </div>
          </div>
          <div className="row border-bottom mt-2">
            <div className="col-6">
              <p className="fw-bold">City </p>
            </div>
            <div className="col-6">
              <p className="">{userData.city}</p>
            </div>
          </div>
          <div className="row border-bottom mt-2">
            <div className="col-6">
              <p className="fw-bold">ZIP/Postal code </p>
            </div>
            <div className="col-6">
              <p className="">{userData.zip}</p>
            </div>
          </div>
          <div className="row border-bottom mt-2">
            <div className="col-6">
              <p className="fw-bold">Street </p>
            </div>
            <div className="col-6">
              <p className="">{userData.street}</p>
            </div>
          </div>
          <div className="row border-bottom mt-2">
            <div className="col-6">
              <p className="fw-bold">House Number </p>
            </div>
            <div className="col-6">
              <p className="">{userData.house_number}</p>
            </div>
          </div>
          <div className="row border-bottom mt-2">
            <div className="col-6">
              <p className="fw-bold">Your instructions </p>
            </div>
            <div className="col-6">
              <p className="">{userData.notes === "" ? "-" : userData.notes}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-12">
          <p className="p-1 fs-4 text-center">Your data </p>
        </div>
        <div className="col-12 border">
          <div className="row border-bottom mt-2">
            <div className="col-6">
              <p className="fw-bold">Name </p>
            </div>
            <div className="col-6">
              <p className="">{userData.name}</p>
            </div>
          </div>
          <div className="row border-bottom mt-2">
            <div className="col-6">
              <p className="fw-bold">Mail </p>
            </div>
            <div className="col-6">
              <p className="">{userData.mail}</p>
            </div>
          </div>
          <div className="row border-bottom mt-2">
            <div className="col-6">
              <p className="fw-bold">Phone number </p>
            </div>
            <div className="col-6">
              <p className="">
                {userData.prefix} {userData.phone}
              </p>
            </div>
          </div>
        </div>
      </div>
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
    </div>
  );
};
