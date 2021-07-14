import axios from "axios";

const api = axios.create({
  baseURL: process.env.NUXT_APP_BASE_URL
});