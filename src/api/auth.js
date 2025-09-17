import axios from "axios";

const BASE_URL = "http://localhost:8080"; // replace with your backend URL

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
