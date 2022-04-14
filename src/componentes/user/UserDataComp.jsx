import React from "react";
import { UserNavSideComp } from "./UserNavSideComp";

export const UserDataComp = () => {
  // const dispatch = useDispatch()

  return (
    <div className="container-fluid mt-5">
      <div className="row">
        <UserNavSideComp />
        <div className="col">
          <h5 className="mt-4 text-center">My data</h5>
          <div className="row d-flex justify-content-center">
            <div className="row mt-2">
              <div className="col">
                <input
                  type="mail"
                  className="form-control p-2"
                  placeholder="Mail"
                />
              </div>
            </div>
            <div className="row mt-md-2">
              <div className="col-12 col-md-6 mt-2">
                <input
                  type="text"
                  className="form-control p-2"
                  placeholder="Name"
                />
              </div>
              <div className="col-12 col-md-6 mt-2">
                <input
                  type="phone"
                  className="form-control p-2"
                  placeholder="Phone number"
                />
              </div>
            </div>
            <div className="row mt-md-2">
              <div className="col-12 col-md-4 mt-2">
                <input
                  type="text"
                  className="form-control p-2"
                  placeholder="City"
                />
              </div>
              <div className="col-12 col-md-4 mt-2">
                <input
                  type="text"
                  className="form-control p-2"
                  placeholder="Street number"
                />
              </div>
              <div className="col-12 col-md-4 mt-2">
                <input
                  type="text"
                  className="form-control p-2"
                  placeholder="Postal code"
                />
              </div>
            </div>
            <div className="row mt-md-2">
              <div className="col-12 col-md-12 mt-2">
                <button className="btn btn-dark rounded-0 shadow-none w-100">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
