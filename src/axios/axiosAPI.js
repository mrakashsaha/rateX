import axios from 'axios';

const axiosAPI = axios.create({
  baseURL: 'http://localhost:3000',
  // baseURL: 'https://ratex-server.vercel.app',
  withCredentials: true,
});

export default axiosAPI;
