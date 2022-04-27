import axios from "axios";

export const getProducts = axios.create({
  baseURL: "https://jacto.com/api/v1/products",
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    "Access-Control-Allow-Origin": "*",
  }
});