import axios from "axios";
import instance from "./axios";
import Cookies from "js-cookie";

const API_URL = "http://localhost:3000/api";

instance.interceptors.request.use((config) => {
  const token = Cookies.get("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const registerRequest = async (user) => {
  try {
    const response = await axios.post(`${API_URL}/signup`, user);
    return response; 
  } catch (error) {
    console.error("Error registering user:", error.response ? error.response.data : error.message);
    throw error;
  }
}

export const loginRequest = async (user) => {
  try {
    const response = await axios.post(`${API_URL}/login`, user);
    return response;
  } catch (error) {
    console.error("Error logging in:", error.response ? error.response.data : error.message);
    throw error;
  }
}


export const servicesRequest = async () => {
  try {
    const response = await axios.get(`${API_URL}/services`);
    return response.data;
  } catch (error) {
    console.error("Error fetching services:", error.response ? error.response.data : error.message);
    throw error;
  }
}

export const serviceRequest = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/services/${id}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching service:", error.response ? error.response.data : error.message);
    throw error;
  }
}


export const categoriesRequest = async () => {
  try {
    const response = await axios.get(`${API_URL}/categories`);
    return response.data;
  } catch (error) {
    console.error("Error fetching categories:", error.response ? error.response.data : error.message);
    throw error;
  }
}

export const salonsRequest = async () => {
  try {
    const response = await axios.get(`${API_URL}/salons`);
    return response.data;
  } catch (error) {
    console.error("Error fetching salons:", error.response ? error.response.data : error.message);
    throw error;
  }
}


export const reservationsRequestByUser = async () => {
  try {
    const response = await instance.get(`/reservations`);
    return response.data;
  } catch (error) {
    console.error("Error fetching reservations:", error.response ? error.response.data : error.message);
    throw error;
  }
}