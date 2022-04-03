import React from "react";
import { IoTrash } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RemovefromCart } from "../../actions/cart";
import { TotalComp } from "./TotalComp";
export const CheckoutScreen = () => {
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleDelete = (products) => {
    dispatch(RemovefromCart(products.id));
  };

  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <h2 className="mt-5">Your products:</h2>
      </div>
      {cart.length > 0 ? (
        <div className="row mt-5 table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th className="col text-center">Product image</th>
                <th className="col text-center">Product Name</th>
                <th className="col text-center">Amount</th>
                <th className="col text-center">Price</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((products) => {
                return (
                  <tr key={products.id}>
                    <td className="d-flex justify-content-center">
                      <img
                        src={`${products.img}`}
                        style={{ height: "8rem" }}
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
                    <td>
                      <div className="d-flex justify-content-center align-items-center">
                        <button
                          className="btn btn-outline-danger rounded-0 mt-2 d-flex justify-content-center align-items-center"
                          onClick={() => handleDelete(products)}
                        >
                          Remove
                          <div className="mx-1"></div>
                          <IoTrash />
                        </button>
                      </div>
                      <div className="d-flex justify-content-center align-items-center">
                        <button className="btn btn-outline-secondary rounded-1 mt-2">
                          <Link to={`/product/${products.id}`}>
                            See product
                          </Link>
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="row mt-5">
          <p className="text-center text-muted">Your cart is empty</p>
          <div className="col-12 d-flex justify-content-center flex-row">
            <Link to="/">
              <button className="btn btn-outline-dark w-100 rounded-0">
                Start Shopping
              </button>
            </Link>
          </div>
        </div>
      )}
      {cart.length > 0 ? (
        <>
          <TotalComp />
          <div className="row">
            <Link to="/checkout/user/your-data">
              <button className="btn btn-outline-dark rounded-0 w-100">
                Next Step
              </button>
            </Link>
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
};
