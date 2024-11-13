import axios from "axios";

const API_URL = "http://localhost:3000/api"; // Asegúrate de que esta URL sea correcta

export const registerRequest = async (user) => {
  try {
    const response = await axios.post(`${API_URL}/signup`, user);
    return response; // Devuelve la respuesta completa
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