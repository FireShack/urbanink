import React from "react";
import { BannerComp } from "./banner/BannerComp";
import { BannerNewLocation } from "./banner/BannerNewLocation";
import { CardProducts } from "./cards/CardProducts";
import { OverlayCardsComp } from "./cards/OverlayCardsComp";
import { RowCardsComp } from "./cards/RowCardsComp";
import { RowProductCard } from "./cards/RowProductCard";

export const HomeComp = () => {
  return (
    <div className="container font-secondary">
      <BannerComp />
      <RowCardsComp />
      <OverlayCardsComp />
      <RowProductCard />
      <CardProducts />
      <BannerNewLocation />
    </div>
  );
};
