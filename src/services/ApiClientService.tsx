import axios from 'axios';

const apiClient = axios.create({
  baseURL: process.env.API_HOST,
  timeout: 10000,
});

apiClient.interceptors.request.use(
  function (config) {
    // todo do auth here
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  },
);

export default apiClient;
