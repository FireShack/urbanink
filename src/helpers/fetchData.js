import axios from "axios";
// const axios = require("axios");

export const fetchData = async () => {
  const products = [];
  const response = await axios.get("http://localhost:4000/product-card");
  response.data.forEach((data) => {
    products.push(data);
  });
  console.log(products);
  return products;
};
