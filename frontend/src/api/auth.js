import axios from "./axios.js";

// const API_URL = "http://localhost:3000/api";

export const registerRequest = async (user) => {
  try {
    const response = axios.post(`/signup`, user);
    return response;
  } catch (error) {
    console.error("Error registering user:", error);
  }
}

export const loginRequest = async (user) => {
  try {
    const response = await axios.post(`${API_URL}/login`, user);
    return response.data;
  } catch (error) {
    console.error("Error logging in:", error);
  }
}
