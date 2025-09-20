import axios from "axios";

const BASE_URL = "https://ridex-backend-production.up.railway.app";

const authHeader = () => ({
  headers: { Authorization: `Bearer ${localStorage.getItem("jwtToken")}` },
});

export const requestRide = (data) =>
  axios.post(`${BASE_URL}/api/user/rides/request`, data, authHeader());

export const getRequestedRides = () =>
  axios.get(`${BASE_URL}/api/user/rides`, authHeader());

export const getAcceptedRide = () =>
  axios.get(`${BASE_URL}/api/user/rides/current`, authHeader());

export const acceptRide = (rideId) =>
  axios.post(`${BASE_URL}/api/user/rides/${rideId}/accept`, {}, authHeader());

export const completeRide = (rideId) =>
  axios.post(`${BASE_URL}/api/user/rides/${rideId}/complete`, {}, authHeader());
