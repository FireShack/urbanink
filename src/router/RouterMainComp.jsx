import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { startFetchData } from "../actions/cart";
import { ShowUserOrderComp } from "../componentes/userCart/ShowUserOrderComp";
import { AdminRoutesComp } from "./admin-routes/AdminRoutesComp";
import { AuthRoutesComp } from "./AuthRoutesComp";
import { DashboardComp } from "./DashboardComp";
import { OrderAuthRoute } from "./routes-auth/OrderAuthRoute";
import { PrivateRoutes } from "./routes-auth/PrivateRoutes";
import { SignAuthRoute } from "./routes-auth/SignAuthRoute";
import { UserAuthRoute } from "./routes-auth/UserAuthRoute";
import { UserCheckoutComp } from "./UserCheckoutComp";
import { UserDataRouteComp } from "./UserDataRouteComp";

export const RouterMainComp = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(startFetchData());
  }, [dispatch]);

  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route path="/*" element={<DashboardComp />} />
            <Route path="/admin/*" element={<AdminRoutesComp />} />
            <Route
              path="/auth/*"
              element={
                <SignAuthRoute>
                  <AuthRoutesComp />
                </SignAuthRoute>
              }
            />
            <Route
              path="/checkout/*"
              element={
                <PrivateRoutes>
                  <UserCheckoutComp />
                </PrivateRoutes>
              }
            />
            <Route
              path="/checkout/user/payed/your-order"
              element={
                <OrderAuthRoute>
                  <ShowUserOrderComp />
                </OrderAuthRoute>
              }
            />
            <Route
              path="/user/*"
              element={
                <UserAuthRoute>
                  <UserDataRouteComp />
                </UserAuthRoute>
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
};
