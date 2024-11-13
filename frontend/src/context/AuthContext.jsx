import { createContext, useContext, useState, useEffect } from "react";
import { registerRequest, loginRequest } from "../api/auth";
import axios from "axios";
import Cookies from 'js-cookie';

const API_URL = "http://localhost:3000/api"; // Asegúrate de que esta URL sea correcta

export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errors, setErrors] = useState([]);

  const signup = async (user) => {
    try {
      const res = await registerRequest(user);
      console.log(res.data);
      setUser(res.data.user);
      setIsAuthenticated(true);
      Cookies.set('token', res.data.token); // Guardar el token en una cookie
    } catch (error) {
      setErrors(error.response ? error.response.data : [error.message]);
    }
  };

  const signin = async (user) => {
    try {
      const res = await loginRequest(user);
      console.log(res.data);
      setIsAuthenticated(true);
      setUser(res.data.user);
      Cookies.set('token', res.data.token); // Guardar el token en una cookie
    } catch (error) {
      if (Array.isArray(error.response.data)) {
        return setErrors(error.response.data);
      }
      setErrors([error.response.data.message]);
      console.log(error);
    }
  };

  const logout = () => {
    Cookies.remove('token'); // Eliminar el token de la cookie
    setUser(null);
    setIsAuthenticated(false);
  };

  const checkAuth = async () => {
    const token = Cookies.get('token');
    if (token) {
      try {
        const res = await axios.get(`${API_URL}/me`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setUser(res.data.user);
        setIsAuthenticated(true);
      } catch (error) {
        console.error("Error checking auth:", error);
        setIsAuthenticated(false);
        setUser(null);
      }
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signup, signin, logout, errors }}>
      {children}
    </AuthContext.Provider>
  );
};
