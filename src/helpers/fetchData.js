import axios from "axios";

export const fetchData = async () => {
  const products = [];
  const response = await axios.get(`http://localhost:4005/all-data`);
  response.data.forEach((data) => {
    products.push(data);
  });
  console.log(products);
  return products;
};
