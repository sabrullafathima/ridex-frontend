import axios from "axios";

const BASE_URL = "https://ridex-backend-production.up.railway.app"; // replace with your backend URL

export const registerUser = (data) =>
  axios.post(`${BASE_URL}/api/auth/register`, data);
export const loginUser = (data) =>
  axios.post(`${BASE_URL}/api/auth/login`, data);
export const getProfile = () => {
  const token = localStorage.getItem("jwtToken");
  return axios.get(`${BASE_URL}/api/users/profile`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const requestRide = (data) => {
  const token = localStorage.getItem("jwtToken");
  return axios.post(`${BASE_URL}/api/user/rides/request`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
