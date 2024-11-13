import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import React from "react";
import LogoutButton from "./LogoutButton";
export function Header() {

  const { user, isAuthenticated } = useAuth();
  return (
    <header className="bg-danger text-white py-3">
      <div className="container d-flex justify-content-between align-items-center">
        <h1 className="h1 font-weight-bold mb-0" style={{fontFamily: 'Great Vibes', fontStyle: 'cursive'}}>Blessing</h1>
        <nav>
          <ul className="nav">
            <li className="nav-item">
              <Link to="/" className="nav-link text-white">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/services" className="nav-link text-white">Services</Link>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link text-white">Contact</a>
            </li>
            <li className="nav-item">
              <a id="open-cart" href="#" className="nav-link text-white">
                Carrito (<span id="cart-count">0</span>)
              </a>
            </li>
            {isAuthenticated ? (
            <li className="nav-item">
              <LogoutButton />
            </li>
          ) : (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/signup">Sign Up</Link>
              </li>
            </>
          )}
          </ul>
        </nav>
      </div>
    </header>

  );
}

