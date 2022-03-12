import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsFillBagFill } from "react-icons/bs";
import {
  IoArrowDown,
  IoReturnDownBackSharp,
  IoHeartOutline,
  IoStarSharp,
} from "react-icons/io5";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { addToCart, repeatedItemfromCart } from "../../actions/cart";
import { Carousel, ToggleButton, ToggleButtonGroup } from "react-bootstrap";
import { ShowSectionData } from "../sections/ShowSectionData";

export const ShowProductComp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { productId } = useParams();
  const { product, cart } = useSelector((state) => state.cart);
  const productFinded = product.find((product) => product.id === productId);
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
      });
      const updated = update.filter((product) => product !== undefined);
      dispatch(repeatedItemfromCart(updated));
      return;
    } else {
      dispatch(addToCart(productToAdd));
    }
  };

  const handleFav = () => {
    // Send info to data base
  };
  const handleComment = () => {
    // Send info to data base
  };

  if (!productFinded) return <Navigate to="/" />;
  const handleBack = () => {
    return navigate(-1);
  };
  return (
    <div className="container mt-5">
      <div className="row d-flex">
        <div className="col-12 col-md-6 col-lg-6 mt-5">
          <div className="" key={productFinded.id}>
            <div className="card shadow-sm rounded-3">
              <Carousel>
                <Carousel.Item>
                  <img
                    src={`${productFinded.img}`}
                    className="img-fluid"
                    alt="Card-img"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    src={`${productFinded.img_2}`}
                    className="img-fluid"
                    alt="Card-img"
                  />
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6 col-lg-6 mt-5 d-flex align-items-center">
          <div className="card-body">
            <div className="card-title d-flex justify-content-center text-most-wanted card-title">
              <h4 className="text-center text-most">{productFinded.title}</h4>
              <div className="mx-2 justify-content-center align-items-center ">
                <IoHeartOutline variant="Filled" onClick={handleFav} />
              </div>
            </div>
            <div className="row d-flex justify-content-center">
              <span className="badge text-dark fs-6 p-2">
                {productFinded.description}
              </span>
              <small className="text-muted text-center">Reviews:</small>
              <div className="d-flex justify-content-center">
                <span className="text-muted text-center">
                  {productFinded.reviews}
                </span>
                <div className="d-flex align-items-center mx-1">
                  <IoStarSharp />
                </div>
              </div>

              <div className="d-flex justify-content-center align-items-center">
                <button
                  className="btn btn-outline-dark rounded-0 w-75 mt-2 d-flex justify-content-center align-items-center"
                  onClick={handleBack}
                >
                  <IoReturnDownBackSharp />
                  <div className="mx-1"></div>
                  Go back
                </button>
                <button
                  className="btn btn-outline-dark rounded-0 w-75 mt-2 d-flex justify-content-center align-items-center"
                  onClick={() =>
                    handleClick(
                      productFinded.id,
                      productFinded.img,
                      productFinded.title,
                      productFinded.price
                    )
                  }
                >
                  Add to cart
                  <div className="mx-1"></div>
                  <BsFillBagFill />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-4 text-center"></div>
      <div className="row mt-4">
        <div className="col-12 col-md-6">
          <div className="fw-bold fs-5 text-center mb-2">Description</div>{" "}
          <p>{productFinded.long_description}</p>
        </div>
        <div className="col-12 col-md-6">
          <div className="fw-bold fs-5 text-center mb-2">Valorations</div>{" "}
          <p>{productFinded.long_description}</p>
        </div>
      </div>
      <form
        className="row mt-4 d-flex justify-content-center"
        onSubmit={handleComment}
      >
        <div className="col-12 mt-3 text-center">
          <h4 className="fw-bold fs-4">Leave us your review</h4>
        </div>
        <div className="">
          <textarea
            className="form-control mt-3 shadow-none border-0 border-bottom"
            placeholder="this product is..."
          ></textarea>
        </div>
        <div className="col-12 d-flex justify-content-center">
          <input
            type="submit"
            value="Send my review"
            className="btn btn-outline-dark mt-3 rounded-0 w-50 shadow-none"
          />
        </div>
      </form>
      <div className="row mt-5">
        <div className="col-12 text-center mt-5">
          <h3>
            Maybe you like this <IoArrowDown />
          </h3>
        </div>
      </div>
      <div className="row mt-3">
        <ShowSectionData filterParam={"section-suggestions"} />
      </div>
    </div>
  );
};
