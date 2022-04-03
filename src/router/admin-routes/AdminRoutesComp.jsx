import React from "react";
import { Route, Routes } from "react-router-dom";
import { AdminChartComp } from "../../admin/AdminChartComp";
import { AdminDashboardComp } from "../../admin/AdminDashboardComp";
import { AdminMailerComp } from "../../admin/AdminMailerComp";
import { AdminOrdersComp } from "../../admin/AdminOrdersComp";
import { AdminProductsComp } from "../../admin/AdminProductsComp";
import { AdminShipmentComp } from "../../admin/AdminShipmentComp";
import { AdminTasksComp } from "../../admin/AdminTasksComp";

export const AdminRoutesComp = () => {
  return (
    <div>
      <Routes>
        <Route path="*" element={<AdminDashboardComp />} />
        <Route path="panel/dashboard" element={<AdminDashboardComp />} />
        <Route path="panel/products" element={<AdminProductsComp />} />
        <Route path="panel/mailer" element={<AdminMailerComp />} />
        <Route path="panel/orders" element={<AdminOrdersComp />} />
        <Route path="panel/shipments" element={<AdminShipmentComp />} />
        <Route path="panel/tasks" element={<AdminTasksComp />} />
        <Route path="panel/chart" element={<AdminChartComp />} />
      </Routes>
    </div>
  );
};
