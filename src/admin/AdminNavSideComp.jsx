import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { RiDashboardLine } from "react-icons/ri";
import { BsBag } from "react-icons/bs";
import { BiMailSend, BiTask } from "react-icons/bi";
import {
  AiOutlineBarChart,
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineUnorderedList,
} from "react-icons/ai";
import { FaShippingFast } from "react-icons/fa";
export const AdminNavSideComp = ({ title }) => {
  const [show, setShow] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <>
      <div
        className="row border-bottom text-white fixed-top card-db-bg-1"
        style={{ height: "4rem" }}
      >
        <div className="col-10 d-flex align-items-center">
          <h1 className="fw-bold mt-1 font-secondary">{title}</h1>
        </div>
        <div className="col-2 d-flex justify-content-end">
          <button
            className="btn shadow-none"
            onClick={() => {
              setShow(show === true ? false : true);
            }}
          >
            <div
              className={
                show
                  ? "p-1 text-white rounded rotate-menu"
                  : "p-1 text-white rounded normal-menu"
              }
            >
              <AiOutlineMenu size="30px" />
            </div>
          </button>
        </div>
      </div>

      <div
        className={
          show
            ? "col-5 col-md-3 col-lg-2 navside-bg border-end bg-height fixed-top font-tertiary menu-on"
            : "col-5 col-md-3 col-lg-2 navside-bg border-end bg-height fixed-top font-tertiary menu-off"
        }
      >
        <div className="row">
          <div className="d-flex justify-content-center mt-3"></div>
          <div className="col mt-5 border-bottom">
            <div className="d-flex justify-content-center">
              {/* <img
              src={
                userAuthData.photo
                  ? `${userAuthData.photo}`
                  : "https://cdn-icons-png.flaticon.com/128/1946/1946429.png"
              }
              className="rounded-circle border p-1 user-img"
              alt="user"
            /> */}
            </div>
            <div>
              <h5 className="text-center mt-3">Name</h5>
            </div>
          </div>
        </div>
        <div className="row" onClick={() => navigate("/admin/panel/dashboard")}>
          <div
            className={
              location.pathname === "/admin/panel/dashboard"
                ? "col-12 p-3 nav-item-bg rounded-start rounded-pill shadow"
                : "col-12 p-3"
            }
          >
            <div className="row  d-flex align-items-center justify-content-between">
              <div className="col-4 d-flex align-items-center justify-content-between">
                <RiDashboardLine />
              </div>

              <div className="col-8 d-flex align-items-center">Dashboard</div>
            </div>
          </div>
        </div>
        <div className="row" onClick={() => navigate("/admin/panel/products")}>
          <div
            className={
              location.pathname === "/admin/panel/products"
                ? "col-12 p-3 nav-item-bg rounded-start rounded-pill shadow "
                : "col-12 p-3"
            }
          >
            <div className="row d-flex align-items-center justify-content-between">
              <div className="col-4 d-flex align-items-center justify-content-between">
                <BsBag />
              </div>

              <div className="col-8 d-flex align-items-center">Products</div>
            </div>
          </div>
        </div>
        <div className="row" onClick={() => navigate("/admin/panel/mailer")}>
          <div
            className={
              location.pathname === "/admin/panel/mailer"
                ? "col-12 p-3 nav-item-bg rounded-start rounded-pill shadow "
                : "col-12 p-3"
            }
          >
            <div className="row d-flex align-items-center justify-content-between">
              <div className="col-4 d-flex align-items-center justify-content-between">
                <BiMailSend />
              </div>

              <div className="col-8 d-flex align-items-center">Mailer</div>
            </div>
          </div>
        </div>
        <div className="row" onClick={() => navigate("/admin/panel/orders")}>
          <div
            className={
              location.pathname === "/admin/panel/orders"
                ? "col-12 p-3 nav-item-bg rounded-start rounded-pill shadow "
                : "col-12 p-3"
            }
          >
            <div className="row d-flex align-items-center">
              <div className="col-4 d-flex align-items-center justify-content-between">
                <AiOutlineUnorderedList />
              </div>
              <div className="col-8 d-flex align-items-center">Orders</div>
            </div>
          </div>
        </div>
        <div className="row" onClick={() => navigate("/admin/panel/shipments")}>
          <div
            className={
              location.pathname === "/admin/panel/shipments"
                ? "col-12 p-3 nav-item-bg rounded-start rounded-pill shadow "
                : "col-12 p-3"
            }
          >
            <div className="row d-flex align-items-center">
              <div className="col-4 d-flex align-items-center justify-content-between">
                <FaShippingFast />
              </div>

              <div className="col-8 d-flex align-items-center">Shipments</div>
            </div>
          </div>
        </div>
        <div className="row" onClick={() => navigate("/admin/panel/tasks")}>
          <div
            className={
              location.pathname === "/admin/panel/tasks"
                ? "col-12 p-3 nav-item-bg rounded-start rounded-pill shadow "
                : "col-12 p-3"
            }
          >
            <div className="row d-flex align-items-center">
              <div className="col-4 d-flex align-items-center justify-content-between">
                <BiTask />
              </div>

              <div className="col-8 d-flex align-items-center">Tasks</div>
            </div>
          </div>
        </div>
        <div className="row" onClick={() => navigate("/admin/panel/chart")}>
          <div
            className={
              location.pathname === "/admin/panel/chart"
                ? "col-12 p-3 nav-item-bg rounded-start rounded-pill shadow "
                : "col-12 p-3"
            }
          >
            <div className="row d-flex align-items-center">
              <div className="col-4 d-flex align-items-center justify-content-between">
                <AiOutlineBarChart />
              </div>

              <div className="col-8 d-flex align-items-center">Chart</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
