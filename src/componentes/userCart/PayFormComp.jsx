import React from "react";

export const PayFormComp = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col mt-4">
          <h2>Payment</h2>
        </div>
      </div>
      <div className="row">
        <div className="col mt-4">
          <div className="form-floating">
            <input
              type="number"
              id="card-number"
              className="form-control rounded-0"
              placeholder="card-number"
            />
            <label htmlFor="card-number">Card Number</label>
          </div>
          <div className="d-flex mt-2">
            <div className="form-floating col-6">
              <input
                type="month"
                id="Expiry"
                className="form-control rounded-0"
                placeholder="Expiry"
              />
              <label htmlFor="Expiry">Expiry</label>
            </div>
            <div className="form-floating col-6">
              <input
                type="number"
                id="cvc"
                className="form-control rounded-0"
                placeholder="cvc"
              />
              <label htmlFor="cvv">CVC</label>
            </div>
          </div>
          <div className="col mt-2">
            <div className="form-floating">
              <input
                type="text"
                id="name"
                className="form-control rounded-0"
                placeholder="name"
              />
              <label htmlFor="name">Titular's name</label>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 mt-3">
          <button className="btn btn-outline-dark rounded-0 w-100">Pay</button>
        </div>
      </div>
    </div>
  );
};
