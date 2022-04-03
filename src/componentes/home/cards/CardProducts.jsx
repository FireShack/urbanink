import React from "react";
import { Carousel } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, repeatedItemfromCart } from "../../../actions/cart";
import { BsFillBagFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { ShowSectionData } from "../../sections/ShowSectionData";

export const CardProducts = () => {
  const dispatch = useDispatch();
  const { product, cart } = useSelector((state) => state.cart);
  const filtered = product.filter(
    (products) => products.section === "section-home-other-products"
  );
  const handleClick = (id, img, title, price) => {
    const productToAdd = {
      id,
      img,
      title,
      amount: 1,
      price,
    };
    console.log(filtered);

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

  return (
    <div className="mt-5">
      <ShowSectionData filterParam={"section-home-other-products"} />
    </div>
  );
};
