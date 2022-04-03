import React from "react";
import { RegisterFormComp } from "./forms/RegisterFormComp";

export const RegisterComp = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 col-md-6 d-flex justify-content-center bg-register">
          <div className="d-block d-md-none d-flex align-items-center">
            <h4 className="text-white fw-bold font-secondary fs-1">Sign up</h4>
          </div>
        </div>
        <RegisterFormComp />
      </div>
    </div>
  );
};
