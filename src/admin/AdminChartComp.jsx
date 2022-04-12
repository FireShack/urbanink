import React from "react";
import { AdminNavSideComp } from "./AdminNavSideComp";

export const AdminChartComp = () => {
  return (
    <div className="container-fluid">
      <AdminNavSideComp title={"Charts"} />
      <div className="row">
        <div className="col">
          <h5>Chart Panel</h5>
        </div>
      </div>
    </div>
  );
};
