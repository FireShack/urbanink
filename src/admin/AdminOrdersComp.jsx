import React from "react";
import { useSelector } from "react-redux";
import { AdminNavSideComp } from "./AdminNavSideComp";

export const AdminOrdersComp = () => {
  const {} = useSelector((state) => state.admin);
  return (
    <div className="container-fluid">
      <AdminNavSideComp />
      <div className="row">
        <div className="col">
          <h5>Orders Panel</h5>
          <div className="row">
            <div className="col"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
