import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../actions/cart";

export const MenSectionComp = () => {
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.cart);
  const handleClick = (id, img, title) => {
    const productToAdd = {
      id,
      img,
      title,
    };
    // console.log("producto clickeado:", id, title);
    dispatch(addToCart(productToAdd));
  };
  return (
    <>
      <div className="mt-5">
        <div className="row">
          <div className="col-sm-6 mt-2 col-md-12">
            <div className="img-overlay img-overlay-men-section rounded">
              <div className="d-flex flex-column text-container justify-content-center align-items-center">
                <h1 className="w-75 text-center text-overlay border border-light">
                  Men's clothes
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {product.map((products) => {
            return (
              <div className="col-sm-12 mt-2 col-md-6" key={products.id}>
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
                    <p className="text-center text fs-5">For man</p>
                    <div className="row d-flex justify-content-center">
                      <span className="badge text-dark ratio-banner rounded-pill text fs-6 p-2 w-50 ">
                        {products.description}
                      </span>
                      <button
                        className="btn btn-outline-dark rounded-0 w-75 mt-2"
                        onClick={() =>
                          handleClick(products.id, products.img, products.title)
                        }
                      >
                        Add to cart
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
