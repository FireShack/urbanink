import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsFillBagFill } from "react-icons/bs";
import { addToCart, repeatedItemfromCart } from "../../actions/cart";
import { ShowSectionData } from "./ShowSectionData";

export const FootwearSectionComp = () => {
  return (
    <>
      <div className="mt-5">
        <div className="row">
          <div className="col-sm-6 mt-2 col-md-12">
            <div className="img-overlay img-overlay-footwear-section rounded">
              <div className="d-flex flex-column text-container justify-content-center align-items-center">
                <h1 className="w-75 text-center text-overlay border border-light">
                  Footwear
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <ShowSectionData filterParam={"section-footwear"} />
      </div>
    </>
  );
};
