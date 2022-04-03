import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AiOutlineHeart, AiOutlineLogout, AiOutlineUser } from "react-icons/ai";
import { BsBag } from "react-icons/bs";
import { useLocation } from "react-router-dom";
import { startLogOut } from "../../actions/auth";

export const UserNavSideComp = () => {
  const { userAuthData } = useSelector((state) => state.auth);
  const location = useLocation();
  const dispatch = useDispatch();

  const handleLogout = () => {
    console.log("Loging out");
    dispatch(startLogOut());
  };

  return (
    <div className="col-3 col-md-3 border-end bg-dark bg-height">
      <div className="row">
        <div className="col mt-5 border-bottom">
          <div className="d-flex justify-content-center">
            <img
              src={
                userAuthData.photo
                  ? `${userAuthData.photo}`
                  : "https://cdn-icons-png.flaticon.com/128/1946/1946429.png"
              }
              className="rounded-circle border p-1 user-img"
              alt="user"
            />
          </div>
          <div>
            <h5 className="text-center mt-3 text-white">{userAuthData.name}</h5>
          </div>
        </div>
      </div>
      <div className="row">
        <div
          className={
            location.pathname === "/user/my-data"
              ? "col-12 p-2 nav-item-bg"
              : "col-12 p-2"
          }
        >
          <Link to="/user/my-data" className="nav-link">
            <div className="row text-white d-flex align-items-center justify-content-between">
              <div className="col-12 col-md-4 d-flex align-items-center justify-content-center justify-content-md-between">
                <AiOutlineUser />
              </div>
              <p className="text-center d-block d-md-none">User</p>
              <div className="col-8 d-none d-md-flex align-items-center">
                Data
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className="row">
        <div
          className={
            location.pathname === "/user/my-orders"
              ? "col-12 p-2 nav-item-bg"
              : "col-12 p-2"
          }
        >
          <Link to="/user/my-orders" className="nav-link">
            <div className="row text-white d-flex align-items-center justify-content-between">
              <div className="col-12 col-md-4 d-flex align-items-center justify-content-center justify-content-md-between">
                <BsBag />
              </div>
              <p className="text-center d-block d-md-none">Orders</p>
              <div className="col-8 d-none d-md-flex align-items-center">
                Orders
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className="row">
        <div
          className={
            location.pathname === "/user/my-favourites"
              ? "col-12 p-2 nav-item-bg"
              : "col-12 p-2"
          }
        >
          <Link to="/user/my-favourites" className="nav-link">
            <div className="row text-white d-flex align-items-center justify-content-between">
              <div className="col-12 col-md-4 d-flex align-items-center justify-content-center justify-content-md-between">
                <AiOutlineHeart />
              </div>
              <p className="text-center d-block d-md-none">Fav</p>
              <div className="col-8 d-none d-md-flex align-items-center">
                Favorites
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className="row">
        <div className="col-12 p-2" onClick={handleLogout}>
          <Link to="/auth/login" className="nav-link">
            <div className="row text-white d-flex align-items-center">
              <div className="col-12 col-md-4 d-flex align-items-center justify-content-center justify-content-md-between">
                <AiOutlineLogout />
              </div>
              <p className="text-center d-block d-md-none">Log out</p>
              <div className="col-8 d-none d-md-flex align-items-center">
                Sign out
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
