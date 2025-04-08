import axios from "axios";

const API_URL = "http://192.168.15.71:5000";

const api = axios.create({
  baseURL: API_URL,
})

api.interceptors.request.use((config) => {
  if (config.data instanceof FormData) {
    config.headers = {
      ...config.headers,
      "Content-Type": "multipart/form-data",
    }
  } else {
    config.headers = {
      ...config.headers,
      "Content-Type": "application/json",
    }
  }
  return config;
})

api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.log("Erro na requisição: ", error);
    throw(error);
  }
);

export default api;