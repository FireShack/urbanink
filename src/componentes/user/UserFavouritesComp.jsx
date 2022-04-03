import React from "react";
import { UserNavSideComp } from "./UserNavSideComp";

export const UserFavouritesComp = () => {
  return (
    <div className="container-fluid mt-5">
      <div className="row">
        <UserNavSideComp />
        <div className="col">
        <h5 className="mt-4 text-center">My favorites</h5>
        </div>
      </div>
    </div>
  );
};
