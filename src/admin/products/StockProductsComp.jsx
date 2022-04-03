import React from "react";
import { BiPackage } from "react-icons/bi";
import { BsBag, BsCurrencyDollar } from "react-icons/bs";
import { useSelector } from "react-redux";

export const StockProductsComp = () => {
  const { product } = useSelector((state) => state.cart);

  const allPrices = product.map((product) => product.price);
  const totalPrices = allPrices.reduce((a, b) => a + b, 0);

  return (
    <>
      <div className="prod-banner d-flex align-items-center shadow-sm">
        <div className="col-12">
          <h1>Manage all your Products here</h1>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col">
          <h2 className="text-center text-color-2 fw-bold">Stock</h2>
        </div>
      </div>
      <div className="col-12 col-md-6 card-border-end-2 mt-5 shadow rounded">
        <div className="card border-0">
          <div className="card-body">
            <div className="row d-flex align-items-center justify-content-center">
              <div
                className="col-3 d-flex align-items-center justify-content-center"
                style={{ height: "3rem" }}
              >
                <div className="d-flex align-items-center">
                  <BsBag size="25px" />
                </div>
              </div>
              <div className="col-9">
                <h5 className="card-title">{product.length} Total products</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-6 mt-5 card-border-start-1 shadow rounded">
        <div className="card border-0">
          <div className="card-body">
            <div className="row d-flex align-items-center justify-content-center">
              <div
                className="col-3 d-flex align-items-center justify-content-center"
                style={{ height: "3rem" }}
              >
                <div className="d-flex align-items-center">
                  <BsCurrencyDollar size="25px" color="green" />
                </div>
              </div>
              <div className="col-9">
                <h5 className="card-title">
                  ${totalPrices.toFixed(2)} in total products
                </h5>
                <div className="text-muted"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 card-border-top-1 mt-5 mt-md-0 shadow rounded">
        <div className="card border-0">
          <div className="card-body">
            <div className="row d-flex align-items-center justify-content-center">
              <div
                className="col-3 d-flex align-items-center justify-content-center"
                style={{ height: "3rem" }}
              >
                <div className="d-flex align-items-center">
                  <BiPackage size="25px" />
                </div>
              </div>
              <div className="col-9">
                <h5 className="card-title">
                  {product.length} Products providers
                </h5>
                <div className="text-muted"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
