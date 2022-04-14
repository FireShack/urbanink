import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsFillBagFill } from "react-icons/bs";
import { addToCart, repeatedItemfromCart } from "../../actions/cart";
import { Link } from "react-router-dom";

export const ShowSectionData = ({ filterParam }) => {
  const dispatch = useDispatch();
  const { product, cart } = useSelector((state) => state.cart);
  const filtered = product.filter(
    (products) => products.section === filterParam
  );
  const handleClick = (id, img, title, price, description) => {
    const productToAdd = {
      id,
      img,
      title,
      amount: 1,
      price,
      description,
    };

    if (cart.some((product) => product.id === productToAdd.id)) {
      const update = cart.map((product) => {
        if (product.id === productToAdd.id) {
          delete product.id;
          product.id = productToAdd.id;
          product.amount = product.amount + 1;
          return product;
        }
        return ""
      });
      const updated = update.filter((product) => product !== undefined);
      dispatch(repeatedItemfromCart(updated));

      return;
    } else {
      dispatch(addToCart(productToAdd));
    }
  };

  return (
    <>
      <div className="container">
        {" "}
        <div className="row">
          {filtered.map((products) => {
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
                        {products.description}
                      </span>
                      <span className="badge text-dark fs-6 p-2">
                        ${products.price}
                      </span>
                      <div className="d-flex justify-content-center align-items-center">
                        <button
                          className="btn btn-outline-dark rounded-0 w-75 mt-2 d-flex justify-content-center align-items-center"
                          onClick={() =>
                            handleClick(
                              products.id,
                              products.img,
                              products.title,
                              products.price,
                              products.description
                            )
                          }
                        >
                          Add to cart
                          <div className="mx-1"></div>
                          <BsFillBagFill />
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
          })}
        </div>
      </div>
    </>
  );
};
