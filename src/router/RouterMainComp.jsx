import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { startFetchData } from "../actions/cart";
import { NavbarComp } from "../componentes/navbar/NavbarComp";
import { AuthRoutesComp } from "./AuthRoutesComp";
import { DashboardComp } from "./DashboardComp";

export const RouterMainComp = () => {
  const dispatch = useDispatch();
  // const { product } = useSelector((state) => state.cart);
  useEffect(() => {
    dispatch(startFetchData());
  }, [dispatch]);

  return (
    <>
      <Router>
        <NavbarComp />
        <div>
          <Routes>
            <Route path="/auth/*" element={<AuthRoutesComp />} />
            <Route path="/*" element={<DashboardComp />} />
          </Routes>
        </div>
      </Router>
    </>
  );
};
