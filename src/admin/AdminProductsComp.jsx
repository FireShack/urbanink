import React, { useState } from "react";
import { IoAddOutline } from "react-icons/io5";
import { Formik } from "formik";
import axios from "axios";
import { AdminNavSideComp } from "./AdminNavSideComp";
import { SearchProductsComp } from "./products/SearchProductsComp";
import { StockProductsComp } from "./products/StockProductsComp";
import { Alert } from "react-bootstrap";

export const AdminProductsComp = () => {
  const [open, setOpen] = useState(false);
  const handlePost = async (
    id,
    img,
    img_2,
    title,
    description,
    long_description,
    price,
    section
  ) => {
    const request = await axios.post("http://localhost:4005/all-data", {
      id,
      img,
      img_2,
      title,
      description,
      long_description,
      price,
      section,
    });
    console.log(request);
  };

  // const mensProducts = product.filter(
  //   (products) => products.section === "section-men"
  // );
  // const womensProducts = product.filter(
  //   (products) => products.section === "section-women"
  // );
  // const accProducts = product.filter(
  //   (products) => products.section === "section-accesories"
  // );
  // const footProducts = product.filter(
  //   (products) => products.section === "section-footwear"
  // );

  return (
    <>
      <AdminNavSideComp title={"Products"} />
      <div className="container">
        <div className="row mt-5 font-secondary">
          <StockProductsComp />
          {/* <ProuctsChartComp /> */}
          {/* <ProductsFormComp /> */}
          <SearchProductsComp />
        </div>
        <div className="d-flex justify-content-end">
          <button
            className="btn shadow-none fixed-bottom d-flex justify-content-end"
            onClick={() => {
              setOpen(open === true ? false : true);
            }}
          >
            <IoAddOutline
              className={open ? "rotate-prod-menu" : "normal-prod-menu"}
              color="purple"
              size="60px"
            />
          </button>
        </div>
        <div
          className={
            open
              ? "col-8 navside-bg border-end bg-height menu-on fixed-top overflow"
              : "col-8 navside-bg border-end bg-height menu-off fixed-top"
          }
        >
          <h2 className="text-center text-color-2">Add a product</h2>
          <Formik
            initialValues={{
              id: "",
              title: "",
              img: "",
              img_2: "",
              url_img: "",
              section: "",
              price: "",
              description: "",
              long_description: "",
            }}
            validate={(values) => {
              let errors = {};
              if (
                !values.id ||
                !values.url_img ||
                !values.title ||
                !values.description ||
                !values.long_description ||
                !values.price ||
                !values.section
              ) {
                errors.empty = "You must complete all the fields";
              }
              return errors;
            }}
            onSubmit={(values) => {
              console.log(values);

              handlePost(
                values.id,
                values.url_img,
                values.url_img,
                values.title,
                values.description,
                values.long_description,
                values.price,
                values.section
              );
            }}
          >
            {({ handleSubmit, handleBlur, handleChange, values, errors }) => (
              <form onSubmit={handleSubmit}>
                <div className="row mt-5 p-2">
                  <div className="col-4">
                    <input
                      type="text"
                      name="id"
                      id="id"
                      className="form-control rounded-0 shadow-0"
                      placeholder="ID"
                      value={values.id}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                  <div className="col-8">
                    <input
                      type="text"
                      id="title"
                      name="title"
                      className="form-control rounded-0 shadow-0"
                      placeholder="title"
                      value={values.title}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                </div>
                <div className="row p-2">
                  <div className="col-6">
                    <input
                      type="file"
                      id="img"
                      name="img"
                      className="form-control rounded-0 shadow-0"
                      value={values.img}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                  <div className="col-6">
                    <input
                      type="file"
                      id="img_2"
                      name="img_2"
                      className="form-control rounded-0 shadow-0"
                      value={values.img_2}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                </div>
                <div className="row p-2">
                  <div className="col-6">
                    <select
                      name="section"
                      className="form-control rounded-0 shadow-none"
                      value={values.section}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    >
                      <option>--section--</option>
                      <option id="section-men">section-men</option>
                      <option id="section-section">section-women</option>
                      <option id="footwear-men">section-footwear</option>
                      <option id="accesories-men">section-accesories</option>
                    </select>
                  </div>
                  <div className="col-6">
                    <div className="input-group">
                      <div className="input-group-prepend shadow-none">
                        <span className="input-group-text rounded-0 shadow-none">
                          $
                        </span>
                      </div>
                      <input
                        type="number"
                        id="price"
                        name="price"
                        className="form-control rounded-0 shadow-0"
                        placeholder="price"
                        value={values.price}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </div>
                  </div>
                </div>
                <div className="row p-2">
                  <div className="col">
                    <input
                      type="text"
                      name="description"
                      id="description"
                      className="form-control rounded-0 shadow-none"
                      placeholder="Description"
                      value={values.description}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                </div>
                <div className="row p-2">
                  <div className="col">
                    <input
                      type="text"
                      name="url_img"
                      id="url_img"
                      className="form-control rounded-0 shadow-none"
                      placeholder="url"
                      value={values.url_img}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                </div>
                <div className="row p-2">
                  <div className="col">
                    <textarea
                      type="text"
                      name="long_description"
                      id="long_description"
                      className="form-control rounded-0 shadow-none"
                      placeholder="Long description"
                      style={{ height: "5rem" }}
                      value={values.long_description}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    ></textarea>
                  </div>
                </div>
                <div className="row p-2 d-flex justify-content-center">
                  <div className="col-12 text-center text-color-2">
                    <h3>Preview</h3>
                  </div>
                  <div className="col-sm-12 col-md-8 mt-2">
                    <div className="card shadow-sm rounded-3">
                      <img
                        src={`${values.url_img}`}
                        className="d-block w-100"
                        alt="Card-img"
                      />
                      <div className="card-body">
                        <h4 className="card-title text-most-wanted card-title text-center text-most">
                          {values.title}
                        </h4>
                        <div className="row d-flex justify-content-center">
                          <span className="badge text-dark fs-6 p-2">
                            {values.description}
                          </span>
                          <span className="badge text-dark fs-6 p-2">
                            ${values.price}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {!errors.empty && (
                  <div className="p-2 d-flex justify-content-end">
                    <button
                      type="Submit"
                      className="mt-3 card-db-border-1 btn rounded-0 shadow-none"
                    >
                      Save product
                    </button>
                  </div>
                )}
                {errors.empty && (
                  <Alert className="text-center" variant="danger">
                    {errors.empty}
                  </Alert>
                )}
              </form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};
