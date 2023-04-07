import axios from "axios";

export const http_ai = axios.create({
  baseURL: `http://118.70.126.72:7000/`,
  withCredentials: false,
});
