import axios, { AxiosHeaders } from "axios";

const BASE_URL = "https://ridex-backend-production.up.railway.app"; // replace with your backend URL

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

export const requestRide = (data) => {
  const token = localStorage.getItem("jwtToken");
  return axios.post(`${BASE_URL}/api/user/rides/request`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const getRequestedRides = () => {
  const token = localStorage.getItem("jwtToken");
  return axios.get(`${BASE_URL}/api/user/rides`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const getAcceptedRide = () => {
  const token = localStorage.getItem("jwtToken");
  return axios.get(`${BASE_URL}/api/user/rides/current`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const acceptRide = (rideId) => {
  const token = localStorage.getItem("jwtToken");
  return axios.post(
    `${BASE_URL}/api/user/rides/${rideId}/accept`,
    {},
    { headers: { Authorization: `Bearer ${token}` } }
  );
};

export const completeRide = (rideId) => {
  const token = localStorage.getItem("jwtToken");
  return axios.post(
    `${BASE_URL}/api/user/rides/${rideId}/complete`,
    {},
    { headers: { Authorization: `Bearer ${token}` } }
  );
};
