import axiosInstance from './axiosConfig';

const BASE_PATH = '/auth';

const authApi = {
  login: (data) => {
    const url = `${BASE_PATH}/login`;
    return axiosInstance.post(url, data);
  },
  register: (data) => {
    const url = `${BASE_PATH}/register`;
    return axiosInstance.post(url, data);
  },
  logout: () => {
    const url = `${BASE_PATH}/logout`;
    return axiosInstance.post(url);
  },
};

export default authApi;
