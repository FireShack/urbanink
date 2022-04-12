import React from "react";
import { AdminNavSideComp } from "./AdminNavSideComp";

export const AdminTasksComp = () => {
  return (
    <div className="container-fluid">
      <AdminNavSideComp title={"Tasks"} />
      <div className="row">
        <div className="col">
          <h5>Tasks Panel</h5>
        </div>
      </div>
    </div>
  );
};
