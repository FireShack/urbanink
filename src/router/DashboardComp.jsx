import { Routes, Route } from "react-router-dom";
import { HomeComp } from "../componentes/home/HomeComp";
import { AccesoriesSectionComp } from "../componentes/sections/AccesoriesSectionComp";
import { FootwearSectionComp } from "../componentes/sections/FootwearSectionComp";
import { MenSectionComp } from "../componentes/sections/MenSectionComp";
import { WomenSectionComp } from "../componentes/sections/WomenSectionComp";
import { ShowProductComp } from "../componentes/showProduct/ShowProductComp";
import { CheckoutScreen } from "../componentes/userCart/CheckoutScreen";
export const DashboardComp = () => {
  return (
    <Routes>
      <Route path="products/men" element={<MenSectionComp />} />
      <Route path="products/women" element={<WomenSectionComp />} />
      <Route path="products/footwear" element={<FootwearSectionComp />} />
      <Route path="products/accesories" element={<AccesoriesSectionComp />} />
      <Route path="product/:productId" element={<ShowProductComp />} />
      <Route path="user/checkout" element={<CheckoutScreen />} />
      <Route path="*" element={<HomeComp />} />
    </Routes>
  );
};
