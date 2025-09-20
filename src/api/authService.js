import axios from "axios";

const BASE_URL = "https://ridex-backend-production.up.railway.app";

export const registerUser = (data) =>
  axios.post(`${BASE_URL}/api/auth/register`, data);

export const loginUser = (data) =>
  axios.post(`${BASE_URL}/api/auth/login`, data);

export const getUserDetails = () => {
  const token = localStorage.getItem("jwtToken");
  return axios.get(`${BASE_URL}/api/user/details`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
