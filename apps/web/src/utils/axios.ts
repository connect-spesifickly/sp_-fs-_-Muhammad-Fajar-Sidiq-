import axios from "axios";
export const api = axios.create({
  baseURL: "https://sp-fs-muhammad-fajar-sidiq-web-api.vercel.app/api",
});
