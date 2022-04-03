import React, { useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import { IoTrash } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RemovefromCart } from "../../actions/cart";
import { closeElement } from "../../actions/ui";

export const UserCart = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);
  const { show } = useSelector((state) => state.ui);
  const subTotal = cart.map((product) => {
    return product.amount * product.price;
  });
  const TotalToPay = subTotal.reduce((a, b) => a + b, 0);
  const handleClose = () => {
    dispatch(closeElement());
  };
  const handleDelete = (products) => {
    dispatch(RemovefromCart(products.id));
  };

  return (
    <div>
      <Modal fullscreen centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Your products: {cart.length}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
            </div>
          )}
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-between">
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <h1>Total: ${TotalToPay.toFixed(2)}</h1>
          <Link to="/checkout/user/your-cart">
            <Button variant="outline-dark" onClick={handleClose}>
              Start Checkout
            </Button>
          </Link>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
