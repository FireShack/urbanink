import React from "react";

export const AdminModifyProductsComp = () => {
  return (
    <div className="col">
      <div className="mt-3 mb-3">
        <h5>Change a product</h5>
      </div>
      <div className="row">
        <div className="col-6">
          <input
            type="text"
            className="form-control rounded-0 shadow-none p-2"
            placeholder="Product id"
          />
        </div>
        <div className="col-6">
          <input
            type="text"
            className="form-control rounded-0 shadow-none p-2"
            placeholder="Product title"
          />
        </div>
      </div>

      <div className=" mt-3">
        <input
          type="option"
          className="form-control rounded-0 shadow-none p-2"
          placeholder="Product section"
        />
      </div>
      <div className=" mt-3">
        <input
          type="text"
          className="form-control rounded-0 shadow-none p-2"
          placeholder="Product fist image"
        />
      </div>
      <div className=" mt-3">
        <input
          type="text"
          className="form-control rounded-0 shadow-none p-2"
          placeholder="Product second image"
        />
      </div>
      <div className=" mt-3">
        <input
          type="text"
          className="form-control rounded-0 shadow-none p-2"
          placeholder="Product price"
        />
      </div>
      <div className=" mt-3">
        <input
          type="text"
          className="form-control rounded-0 shadow-none p-2"
          placeholder="Product short description"
        />
      </div>
      <div className=" mt-3">
        <input
          type="text"
          className="form-control rounded-0 shadow-none p-2"
          placeholder="Product long description"
        />
      </div>
    </div>
  );
};
