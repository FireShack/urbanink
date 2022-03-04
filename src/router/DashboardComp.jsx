import { Routes, Route } from "react-router-dom";
import { HomeComp } from "../componentes/home/HomeComp";
import { AccesoriesSectionComp } from "../componentes/sections/AccesoriesSectionComp";
import { FootwearSectionComp } from "../componentes/sections/FootwearSectionComp";
import { MenSectionComp } from "../componentes/sections/MenSectionComp";
import { WomenSectionComp } from "../componentes/sections/WomenSectionComp";
import { ShowProductComp } from "../componentes/showProduct/ShowProductComp";
export const DashboardComp = () => {
  return (
    <Routes>
      <Route path="*" element={<HomeComp />} />
      <Route path="product" element={<ShowProductComp />} />
      <Route path="men" element={<MenSectionComp />} />
      <Route path="women" element={<WomenSectionComp />} />
      <Route path="footwear" element={<FootwearSectionComp />} />
      <Route path="accesories" element={<AccesoriesSectionComp />} />
    </Routes>
  );
};
