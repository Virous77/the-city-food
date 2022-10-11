import React from "react";
import "../../styles/Navbar.css";
import Logo from "../../images/logo.png";
import { FaShoppingBasket } from "react-icons/fa";
import Avatar from "../../images/avatar.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useStateValue } from "../../store/StateProvider";
import MobileNavbar from "./MobileNavbar";
import Cart from "../Cart";
import { useCartContext } from "../../store/CartContext";
import Profile from "./Profile";

const Navbar = () => {
  const { showCart, hideCart, cartShow, cart, totalItems } = useCartContext();

  const { loginUser, user, show, logoutUser, setShow } = useStateValue();

  return (
    <div>
      <header className="navbar">
        <nav className="desktop">
          <div className="logo">
            <Link to="/">
              <img src={Logo} alt="logo" />
              <h2>City</h2>
            </Link>
          </div>

          <div className="links">
            <ul className="nav-list">
              <li>
                <Link to="/">Home</Link>
              </li>

              <li>
                <Link to="/menu">Menu</Link>
              </li>

              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>

            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ delay: 0.3 }}
              className="basket"
              onClick={() => {
                showCart();
                setShow(false);
              }}
            >
              <FaShoppingBasket className="basketIcon" />

              {cart && cart.length > 0 && (
                <p className="basketItem">{totalItems}</p>
              )}
            </motion.div>

            <div className="avatar">
              <motion.img
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ delay: 0.3 }}
                src={user ? user?.photoURL : Avatar}
                alt={user?.displayName}
                onClick={() => {
                  loginUser();
                  hideCart();
                }}
              />
            </div>
          </div>
        </nav>

        <div className="mobileView">
          <MobileNavbar />
        </div>
      </header>
      <div className="cartBar">{cartShow && <Cart />}</div>
      <div className="dropdown">
        {show && (
          <Profile
            user={user}
            setShow={setShow}
            show={show}
            logoutUser={logoutUser}
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
