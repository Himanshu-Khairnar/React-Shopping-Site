import React, { useContext, useState, useRef } from "react";
import "./navbar.css";
import logo from "../assets/logo.png";
import cart from "../assets/cart_icon.png";
import { Link, NavLink, Outlet } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import { IoIosArrowDropdown } from "react-icons/io";

const Navbar = () => {
  const [menu, setmenu] = useState("shop");
  const { getTotalCartItems, all_product, cartItems, removeToCart } =
    useContext(ShopContext);
  const menuRef = useRef();
  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle('nav-menu-visible');
    e.target.classList.toggle("open");
  };
  return (
    <>
      <div className="navbar">
        <div className="nav-logo">
          <img src={logo} alt="logo" className="logo" />
          <p>Shopper</p>
        </div>
        <IoIosArrowDropdown className="navdropdown" onClick={dropdown_toggle} />
        <ul ref={menuRef} className="nav-menu">
          <li onClick={() => setmenu("shop")}>
            <Link to="/ " className="nav-links">
              Shop
            </Link>

            {menu === "shop" && <hr />}
          </li>
          <li onClick={() => setmenu("men")}>
            <Link to="/men" className="nav-links">
              Men
            </Link>

            {menu === "men" && <hr />}
          </li>
          <li onClick={() => setmenu("women")}>
            <Link to="/women" className="nav-links">
              Women
            </Link>
            {menu === "women" && <hr />}
          </li>
          <li onClick={() => setmenu("kids")}>
            <Link to="/kids" className="nav-links">
              Kids
            </Link>
            {menu === "kids" && <hr />}
          </li>
        </ul>

        <div className="nav-login-cart">
          <Link to="/login">
            {" "}
            <button>Login</button>
          </Link>
          <Link to="/cart">
            {" "}
            <img src={cart} alt="cart" className="cart" />{" "}
          </Link>
          <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
