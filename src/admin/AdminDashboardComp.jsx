import React, { useEffect } from "react";
import { AiOutlineUnorderedList, AiOutlineUser } from "react-icons/ai";
import { BiMailSend, BiTask } from "react-icons/bi";
import { BsBag, BsCurrencyDollar } from "react-icons/bs";
import { FaShippingFast } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { FcBarChart } from "react-icons/fc";
import {
  startLoadAdminEarnedData,
  startLoadAdminFilterQuery,
  startLoadAdminMonthEarnedData,
  startLoadAdminMonthlyEarned,
  startLoadAdminOrders,
  startLoadAdminUsersAmountData,
  startLoadAdminUsersData,
} from "../actions/admin";
import { AdminNavSideComp } from "./AdminNavSideComp";
import { StatisticsBarChartComp } from "./dashboard/StatisticsBarChartComp";

export const AdminDashboardComp = () => {
  const dispatch = useDispatch();
  const {
    adminOrders,
    adminFilterQuery,
    adminEarnedData,
    adminMonthEarnedData,
    adminUsersAmount,
    adminMonthlyEarned,
  } = useSelector((state) => state.admin);
  const { product } = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const dateData = new Date().toDateString();
  const dateMonth = new Date().getMonth() + 1;
  const mensProducts = product.filter(
    (products) => products.section === "section-men"
  );
  const womensProducts = product.filter(
    (products) => products.section === "section-women"
  );
  const accProducts = product.filter(
    (products) => products.section === "section-accesories"
  );
  const footProducts = product.filter(
    (products) => products.section === "section-footwear"
  );

  useEffect(() => {
    dispatch(startLoadAdminOrders());
    dispatch(startLoadAdminFilterQuery(dateData));
    dispatch(startLoadAdminUsersData());
    dispatch(startLoadAdminEarnedData());
    dispatch(startLoadAdminMonthEarnedData(dateMonth));
    dispatch(startLoadAdminMonthlyEarned());
    dispatch(startLoadAdminUsersAmountData());
  }, [dispatch]);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const prevPrevMonthh = adminMonthlyEarned.filter(
    (products) => products.month === dateMonth - 3
  );

  const earnedprevprevMonth = prevPrevMonthh.map((prod) => Number(prod.earned));
  const totalPrevPrevMonth = earnedprevprevMonth.reduce((a, b) => a + b, 0);

  const prevMonthh = adminMonthlyEarned.filter(
    (products) => products.month === dateMonth - 2
  );
  const earnedprevMonth = prevMonthh.map((prod) => Number(prod.earned));
  const totalPrevMonth = earnedprevMonth.reduce((a, b) => a + b, 0);
  const prevMonthPer =
    ((totalPrevMonth - totalPrevPrevMonth) / totalPrevPrevMonth) * 100;

  const lastMonthh = adminMonthlyEarned.filter(
    (products) => products.month === dateMonth - 1
  );
  const earnedLastMonth = lastMonthh.map((prod) => Number(prod.earned));
  const totalLastMonth = earnedLastMonth.reduce((a, b) => a + b, 0);
  const totalLastMonthPer =
    ((totalLastMonth - totalPrevMonth) / totalPrevMonth) * 100;

  const totalMonth = adminMonthEarnedData.reduce(
    (a, b) => Number(a) + Number(b),
    0
  );
  const earned = ((totalMonth - totalLastMonth) / totalLastMonth) * 100;
  earned.toFixed();

  const total = adminEarnedData.reduce((a, b) => Number(a) + Number(b), 0);

  const toShip = adminOrders.filter((order) => order.shipped === false);
  const shipped = adminOrders.filter((order) => order.shipped === true);
  const shipmentProblems = adminOrders.filter(
    (order) => order.problems[0].exists === true
  );

  return (
    <div className="container">
        <AdminNavSideComp title={"Dashboard"} />
      <div className="row mt-5 mb font-secondary">
        <div className="col">
          <div style={{ marginBottom: "4rem" }}>
            <div className="row db-banner d-flex align-items-center">
              <div className="col-6">
                <small className="text-muted">{dateData}</small>
                <h1>Hi, Username</h1>
              </div>
              <div className="col-6 text-center">
                <small className="">You have n Notifications</small>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <h2 className="text-center text-color-1 fw-bold">
                  General Data
                </h2>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-6 col-md-6 p-1 card-border-end-1 card-border-bottom-1">
                <div
                  className="card rounded border-0"
                  onClick={() => navigate("/admin/panel/orders")}
                >
                  <div className="card-body">
                    <div className="row">
                      <div
                        className="col-3 d-flex align-items-center justify-content-center"
                        style={{ height: "3rem" }}
                      >
                        <AiOutlineUnorderedList size="30px" />
                      </div>
                      <div className="col-9">
                        <h5 className="card-title">
                          {adminOrders.length} <span>Total orders</span>
                        </h5>
                        <div className="text-muted">
                          and {adminFilterQuery.length} today
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-6 p-1 card-border-1 card-border-bottom-1">
                <div
                  className="card border-0 rounded-0"
                  onClick={() => navigate("/admin/panel/products")}
                >
                  <div className="card-body">
                    <div className="row">
                      <div
                        className="col-3 d-flex align-items-center justify-content-center"
                        style={{ height: "3rem" }}
                      >
                        <BsBag size="25px" />
                      </div>
                      <div className="col-9 d-flex align-items-center fs-5">
                        {product.length} Total products
                      </div>
                    </div>
                    {/* <p className="card-text">
                    Men's products: {mensProducts.length}{" "}
                  </p>
                  <p className="card-text">
                    Women's products: {womensProducts.length}
                  </p>
                  <p className="card-text">Accessories: {accProducts.length}</p>
                  <p className="card-text">Footwear: {footProducts.length}</p> */}
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-6 p-1 card-border-end-1">
                <div className="card border-0">
                  <div className="card-body">
                    <div className="row">
                      <div
                        className="col-3 d-flex align-items-center justify-content-center"
                        style={{ height: "3rem" }}
                      >
                        <AiOutlineUser size="25px" />
                      </div>
                      <div className="col-9 d-flex align-items-center fs-5">
                        {adminUsersAmount.length} Users
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-6 p-1">
                <div
                  className="card border-0"
                  onClick={() => navigate("/admin/panel/products")}
                >
                  <div className="card-body">
                    <div className="row">
                      <div
                        className="col-3 d-flex align-items-center justify-content-center"
                        style={{ height: "3rem" }}
                      >
                        <FaShippingFast size="25px" />
                      </div>
                      <div className="col-9">
                        <h5 className="card-title">
                          <p className="card-text">
                            {shipped.length} Total shipped
                          </p>
                        </h5>
                        <div className="text-muted">
                          {toShip.length} Pending to ship
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-3" style={{ marginBottom: "4rem" }}>
            <div className="row mb-3">
              <div className="col">
                <h2 className="text-center text-color-2 fw-bold">
                  Tasks & Comunication
                </h2>
              </div>
            </div>
            <div className="col-12 col-md-6 p-1 card-border-end-2">
              <div className="card border-0">
                <div className="card-body">
                  <div className="row">
                    <div
                      className="col-3 d-flex align-items-center justify-content-center"
                      style={{ height: "3rem" }}
                    >
                      <BiTask size="25px" />
                    </div>
                    <div className="col-9">
                      <h5 className="card-title">
                        <p className="card-text">
                          {shipped.length} Pending tasks
                        </p>
                      </h5>
                      <div className="text-muted">{toShip.length} today</div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <ul className="list-group">
                        <li className="list-group-item">Item</li>
                        <li className="list-group-item">Item</li>
                        <li className="list-group-item">Item</li>
                      </ul>
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col d-flex justify-content-end">
                      <button
                        className="btn card-db-border-2 rounded-0 shadow-0"
                        onClick={() => navigate("/admin/panel/tasks")}
                      >
                        See more
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 p-1">
              <div className="card border-0">
                <div className="card-body">
                  <div className="row">
                    <div
                      className="col-3 d-flex align-items-center justify-content-center"
                      style={{ height: "3rem" }}
                    >
                      <BiMailSend size="25px" />
                    </div>
                    <div className="col-9">
                      <h5 className="card-title">
                        <p className="card-text">
                          {shipped.length} Mail sended
                        </p>
                      </h5>
                      <div className="text-muted">
                        {toShip.length} to send today
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <ul className="list-group">
                        <li className="list-group-item">0 High priority</li>
                        <li className="list-group-item">0 Mid priority</li>
                        <li className="list-group-item">0 Low priority</li>
                      </ul>
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col d-flex justify-content-end">
                      <button
                        className="btn card-db-border-2 rounded-0 shadow-0"
                        onClick={() => navigate("/admin/panel/mailer")}
                      >
                        See more
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-3" style={{ marginBottom: "4rem" }}>
            <div className="row mb-3">
              <div className="col">
                <h2 className="text-center text-color-3 fw-bold">
                  Glance to your finance
                </h2>
              </div>
            </div>
            <div className="col-12 col-md-6 p-1 card-border-end-3 mb-3">
              <div className="card border-0">
                <div className="card-body">
                  <div className="row mb-3">
                    <div
                      className="col-3 d-flex align-items-center justify-content-center"
                      style={{ height: "3rem" }}
                    >
                      <FcBarChart size="25px" />
                    </div>
                    <div className="col-9">
                      <h5 className="">Income last three months</h5>
                      <small className="">
                        {earned.toFixed(2)}% than last month
                      </small>
                    </div>
                  </div>
                  <StatisticsBarChartComp />
                  <div className="row mt-3">
                    <div className="col d-flex justify-content-end">
                      <button className="btn card-db-border-3 rounded-0 shadow-none">
                        See all charts
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 p-1 d-flex align-items-center">
              <div className="card border-0">
                <div className="card-body">
                  <div className="row d-flex align-items-center justify-content-center">
                    <div
                      className="col-3 d-flex align-items-center justify-content-center"
                      style={{ height: "3rem" }}
                    >
                      <div className="d-flex align-items-center">
                        <BsCurrencyDollar size="25px" color="green" />
                      </div>
                    </div>
                    <div className="col-9">
                      <h5 className="card-title">
                        <p className="card-text">Revenue ${total.toFixed(2)}</p>
                      </h5>
                      <div className="text-muted">
                        And in {months[dateMonth - 1]}: ${totalMonth.toFixed(2)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
