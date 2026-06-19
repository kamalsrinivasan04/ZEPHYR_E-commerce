import { useContext } from "react";

import {CartContext} from "../../context/CartContext";

import { Link } from "react-router-dom";

import {
  FaHeart,
  FaShoppingCart,
  FaSearch,
  FaMoon
} from "react-icons/fa";

import "./Navbar.css";
import "./Navbar.css";


function Navbar({ openCart }) {
  const { cartItems } = useContext(CartContext);
  return (
    <nav className="navbar">

      <div className="navbar-logo">
        <Link to="/">
          ZEPHYR
        </Link>
      </div>

      <ul className="navbar-links">

        <li>
          <Link to="/">
            Home
          </Link>
        </li>

        <li>
          <Link to="/products">
            Products
          </Link>
        </li>

        <li>
          <Link to="#">
            Categories
          </Link>
        </li>

      </ul>

    <div className="navbar-actions">

        <button className="nav-icon">
            <FaSearch />
        </button>

        <Link
            to="/wishlist"
            className="nav-icon"
        >
            <FaHeart />
        </Link>

        <button
          className="nav-icon"
          onClick={openCart}
        >
            <FaShoppingCart />
            <span className="cart-count">
              {cartItems.length}
            </span>
        </button>

        <button className="nav-icon">
            <FaMoon />
        </button>

    </div>

    </nav>
  );
}

export default Navbar;