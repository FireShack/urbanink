import React from "react";
import { useSelector } from "react-redux";
import { AdminNavSideComp } from "./AdminNavSideComp";

export const AdminOrdersComp = () => {
  const {} = useSelector((state) => state.admin);
  return (
    <div className="container-fluid">
      <AdminNavSideComp title={"Orders"} />
      <div className="row">
        <div className="col">
          <div className="row">
            <div className="col"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
