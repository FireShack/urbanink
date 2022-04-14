import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadDeleteAdminProduct } from "../../actions/cart";

export const SearchProductsComp = () => {
  const { product } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [optionFilter, setOptionFilter] = useState("");
  const [value, setValue] = useState("");
  const [priceOption, setPriceOption] = useState("");
  const [ProductsArray, setArray] = useState([]);
  const [disable, setDisable] = useState(false);

  const handleFilter = (filterCat, filterParam) => {
    const filterProducts = product.filter((product) => {
      if (filterCat === "All products") {
        return product;
      } else if (optionFilter === "" || value === "") {
        return "";
      } else if (filterCat === "id") {
        return product.id.toLowerCase().includes(filterParam);
      } else if (filterCat === "section") {
        return product.section.toLowerCase().includes(filterParam);
      } else if (filterCat === "price") {
        return product.price >= Number(filterParam);
      } else if (filterCat === "title") {
        return product.title.toLowerCase().includes(filterParam);
      }
      return "";
    });
    setArray(filterProducts);
  };

  const handleDelete = (id) => {
    dispatch(loadDeleteAdminProduct(id));
  };

  return (
    <div className="col-12 mt-5">
      <div className="row mt-5">
        <div className="col">
          <h2 className="text-center text-color-3 fw-bold">
            All your products
          </h2>
        </div>
      </div>
      <div className="mt-3">
        <div className="row">
          <div className="col-12 col-md-6 d-flex align-items-center">
            <select
              className="form-control rounded-0 shadow-none p-2"
              onChange={(e) => {
                setOptionFilter(e.target.value);
                setValue("");
                if (e.target.value === "All products") {
                  handleFilter("All products");
                  setDisable(true);
                } else {
                  setDisable(false);
                }
                if (e.target.value === "price") {
                  setPriceOption(true);
                } else {
                  setPriceOption(false);
                }
              }}
            >
              <option></option>
              <option>All products</option>
              <option>id</option>
              <option>section</option>
              <option>title</option>
              <option>price</option>
            </select>
          </div>
          <div className="col-12 col-md-6 mt-2 mt-md-0">
            {priceOption ? (
              <div className="">
                <label className="form-label text-center">
                  Sort by more than ${value}
                </label>
                <input
                  type="range"
                  className="form-range rounded-0 shadow-none p-2"
                  min="30"
                  max="300"
                  step="10"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                />
              </div>
            ) : (
              <input
                type="text"
                className="form-control rounded-0 shadow-none p-2"
                placeholder="Search products"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                disabled={disable ? true : false}
              />
            )}
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-12">
            <button
              className="btn card-db-border-3 rounded-0 shadow-none w-100"
              onClick={() => handleFilter(optionFilter, value)}
            >
              Search
            </button>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          {ProductsArray.length > 0 ? (
            <div className="row mt-5 table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th className="col text-center">Product image</th>
                    <th className="col text-center">Product Name</th>
                    <th className="col text-center">Section</th>
                    <th className="col text-center">Price</th>
                  </tr>
                </thead>
                <tbody>
                  {ProductsArray.map((products) => {
                    return (
                      <tr key={products.id}>
                        <td className="d-flex justify-content-center">
                          <img
                            src={`${products.img}`}
                            style={{ height: "8rem" }}
                            alt="product"
                          />
                        </td>
                        <td>
                          <p className="text-center">{products.title}</p>
                        </td>
                        <td>
                          <p className="text-center">{products.section}</p>
                        </td>
                        <td>
                          <p className="text-center">${products.price}</p>
                        </td>
                        <td>
                          <button
                            className="btn rounded-0 shadow-none"
                            onClick={() => handleDelete(products.id)}
                          >
                            Delete this product
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="row mt-5">
              <p className="text-center text-muted">Search products</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
