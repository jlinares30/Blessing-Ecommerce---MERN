import { Link } from "react-router-dom";
export function Header() {
  return (
    <header className="bg-danger text-white py-3">
      <div className="container d-flex justify-content-between align-items-center">
        <h1 className="h3 font-weight-bold mb-0">Blessing</h1>
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
            <li className="nav-item">
              <Link id="open-modal" type="button" to="/login" className="nav-link text-white">Log in</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>

  );
}
