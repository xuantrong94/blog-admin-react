import axios from 'axios';
import queryString from 'query-string';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_API_URI,
  headers: {
    'Content-Type': 'application/json',
    // Authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`,
    Accept: 'application/json',
  },
  paramsSerializer: (params) => queryString.stringify(params),
});

axiosInstance.interceptors.request.use(async (config) => {
  return config;
});

axiosInstance.interceptors.response.use(
  (res) => {
    if (res && res.data) {
      return res.data;
    }
    return res;
  },
  (err) => {
    throw err;
  }
);

export default axiosInstance;
