import { Routes, Route } from "react-router-dom";
import { FooterComp } from "../componentes/home/FooterComp";
import { HomeComp } from "../componentes/home/HomeComp";
import { NavbarComp } from "../componentes/navbar/NavbarComp";
import { AccesoriesSectionComp } from "../componentes/sections/AccesoriesSectionComp";
import { FootwearSectionComp } from "../componentes/sections/FootwearSectionComp";
import { MenSectionComp } from "../componentes/sections/MenSectionComp";
import { WomenSectionComp } from "../componentes/sections/WomenSectionComp";
import { ShowProductComp } from "../componentes/showProduct/ShowProductComp";

export const DashboardComp = () => {
  return (
    <>
      <NavbarComp />

      <Routes>
        <Route path="products/men" element={<MenSectionComp />} />
        <Route path="products/women" element={<WomenSectionComp />} />
        <Route path="products/footwear" element={<FootwearSectionComp />} />
        <Route path="products/accesories" element={<AccesoriesSectionComp />} />
        <Route path="product/:productId" element={<ShowProductComp />} />
        <Route path="*" element={<HomeComp />} />
      </Routes>

      <FooterComp />
    </>
  );
};
