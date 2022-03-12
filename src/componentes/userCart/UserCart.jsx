import React from "react";
import { Button, Card, Modal } from "react-bootstrap";
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
          <div className="row d-flex jusitfy-content-center">
            {cart.length > 0 ? (
              cart.map((products) => {
                return (
                  <div className="col-6 col-md-4" key={products.id}>
                    <Card>
                      <Card.Img variant="top" src={`${products.img}`} />
                      <Card.Body>
                        <Card.Title className="text-center">
                          {products.title}
                        </Card.Title>
                        <Card.Text>{products.description}</Card.Text>
                        <Card.Text className="text-center">
                          {products.amount} x ${products.price}
                        </Card.Text>
                        <button
                          className="btn btn-outline-danger w-100"
                          onClick={() => handleDelete(products)}
                        >
                          Delete
                        </button>
                      </Card.Body>
                    </Card>
                  </div>
                );
              })
            ) : (
              <p className="text-center">Your cart is empty</p>
            )}
          </div>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-between">
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <h1>Total: ${TotalToPay.toFixed(2)}</h1>
          <Link to="/user/checkout">
            <Button variant="outline-dark" onClick={handleClose}>Go to pay</Button>
          </Link>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
