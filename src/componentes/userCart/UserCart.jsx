import React from "react";
import { Button, Card, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { RemovefromCart } from "../../actions/cart";
import { closeElement } from "../../actions/ui";

export const UserCart = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);
  const { show } = useSelector((state) => state.ui);
  const handleClose = () => {
    dispatch(closeElement());
  };
  const handleDelete = (products) => {
    dispatch(RemovefromCart(products.id));
  };

  return (
    <div>
      <Modal size="lg" centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Your products: {cart.length}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row d-flex jusitfy-content-center">
            {cart.length > 0 ? (
              cart.map((products) => {
                return (
                  <div className="col-6" key={products.id}>
                    <Card style={{ width: "auto" }}>
                      <Card.Img variant="top" src={`${products.img}`} />
                      <Card.Body>
                        <Card.Title className="text-center">
                          {products.id}
                        </Card.Title>
                        <Card.Text>{products.description}</Card.Text>
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
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
