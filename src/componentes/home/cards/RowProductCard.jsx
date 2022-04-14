import React from "react";
import { BsFillBagFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, repeatedItemfromCart } from "../../../actions/cart";

export const RowProductCard = () => {
  const dispatch = useDispatch();
  const { product, cart } = useSelector((state) => state.cart);
  const filtered = product.filter(
    (products) => products.section === "section-home-most-wanted"
  );
  const handleClick = (id, img, title, price) => {
    const productToAdd = {
      id,
      img,
      title,
      amount: 1,
      price,
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
      // console.log(updated);
      // console.log(cart);
      return;
    } else {
      dispatch(addToCart(productToAdd));
    }
  };

  return (
    <div>
      <div className="row ">
        <h3 className="text-center mt-4 text">Most wanted clothes</h3>
      </div>
      <div className="container-fluid">
        <div className="row d-flex flex-nowrap overflow-scroll mt-3">
          <div className="col-sm-12 col-md-6 d-flex flex-column justify-content-center align-items-center">
            <div className="card shadow p-4 card-row-animation">
              <img
                src="https://cdn.icon-icons.com/icons2/933/PNG/128/keyboard-right-arrow-button-1_icon-icons.com_72690.png"
                alt="row"
              />
            </div>
            <div>
              <h1 className="mt-2 text-most-wanted-slide text-center">
                Slide to see ours most wanted styles
              </h1>
            </div>
          </div>
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
    </div>
  );
};
