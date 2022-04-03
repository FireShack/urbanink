import React from "react";
import { RiMastercardLine, RiVisaLine } from "react-icons/ri";
import { BsPaypal } from "react-icons/bs";
export const PaymentsComp = () => {
  return (
    <div>
      <div className="row text-center mt-4">
        <h6>Secure payments</h6>
      </div>
      <div className="row d-flex flex-row text-center mt-3 mb-3">
        <div className="col-4">
          <RiVisaLine size={50} />
        </div>
        <div className="col-4">
          <RiMastercardLine size={50} />
        </div>
        <div className="col-4">
          <BsPaypal size={50} />
        </div>
      </div>
    </div>
  );
};
