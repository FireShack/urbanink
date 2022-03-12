import React from "react";
import { IoTrash } from "react-icons/io5";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
export const CheckoutScreen = () => {
  const { cart } = useSelector((state) => state.cart);
  return (
    <div className="container mt-4">
      <div className="row mt-4 ">
        <h2 className="mt-5">Your products:</h2>
      </div>
      <div className="row">
        {cart.length > 0 ? (
          cart.map((products) => {
            return (
              <div
                className="col-sm-12 mt-2 col-md-6 col-lg-4"
                key={products.id}
              >
                <div className="card shadow-sm rounded-3">
                  <img
                    src={`${products.img}`}
                    className="d-block w-100"
                    alt="Card-img"
                  />

                  <div className="card-body">
                    <h4 className="card-title text-most-wanted card-title text-center text-most">
                      {products.title}
                    </h4>
                    <div className="row d-flex justify-content-center">
                      <span className="badge text-dark fs-6 p-2">
                        {products.amount} x ${products.price}
                      </span>
                      <div className="d-flex justify-content-center align-items-center">
                        <button className="btn btn-outline-dark rounded-0 w-75 mt-2 d-flex justify-content-center align-items-center">
                          Remove
                          <div className="mx-1"></div>
                          <IoTrash />
                        </button>
                      </div>
                      <button className="btn btn-outline-secondary rounded-1 mt-2 w-50">
                        <Link to={`/product/${products.id}`}>See product</Link>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="row mt-5">
            <p className="text-center">Your cart is empty</p>
            <div className="col-12 d-flex justify-content-center flex-row">
              <Link to="/">
                <button className="btn btn-outline-dark w-100 rounded-0">
                  Start Shopping
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
      <div className="row mb-5">
        <div className=""></div>
      </div>
    </div>
  );
};
