import React from "react";
import { LoginFormComp } from "./forms/LoginFormComp";

export const LoginComp = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 col-md-6 d-flex justify-content-center bg-login">
          <div className="d-block d-md-none d-flex align-items-center">
            <h4 className="text-white fw-bold font-secondary fs-1">Sign in</h4>
          </div>
        </div>
        <LoginFormComp />
      </div>
    </div>
  );
};
