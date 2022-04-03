import React from "react";
import { AdminNavSideComp } from "./AdminNavSideComp";
import { ProuctsChartComp } from "./products/ProuctsChartComp";
import { SearchProductsComp } from "./products/SearchProductsComp";
import { StockProductsComp } from "./products/StockProductsComp";

export const AdminProductsComp = () => {
  return (
    <>
      <AdminNavSideComp title={"Products"} />
      <div className="container-fluid">
        <div className="row mt-5 font-secondary">
          <StockProductsComp />
          <ProuctsChartComp />
          <SearchProductsComp />
        </div>
      </div>
    </>
  );
};
