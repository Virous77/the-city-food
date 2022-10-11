import React, { useState } from "react";
import "../../styles/Navbar.css";
import Logo from "../../images/logo.png";
import { FaShoppingBasket } from "react-icons/fa";
import Avatar from "../../images/avatar.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useStateValue } from "../../store/StateProvider";
import { RiMenu2Line } from "react-icons/ri";
import { BsXLg } from "react-icons/bs";
import { useCartContext } from "../../store/CartContext";

const MobileNavbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const { loginUser, user, setShow } = useStateValue();
  const { showCart, hideCart, cart, totalItems } = useCartContext();

  const menuToggle = () => {
    setShowSidebar(false);
    setShow(false);
  };

  const CloseToggle = () => {
    setShowSidebar(true);
    setShow(false);
  };

  const showCartHandler = () => {
    setShowSidebar(false);
  };
  return (
    <header>
      <nav className="mobileSidebar">
        <div className="logo">
          <Link to="/" onClick={() => setShowSidebar(false)}>
            <img src={Logo} alt="logo" />
            <h2>City</h2>
          </Link>
        </div>

        <div className="userProfileMobile">
          <div className="avatar">
            <motion.img
              whileTap={{ scale: 0.8 }}
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

          <div className="hamMenu">
            {!showSidebar ? (
              <RiMenu2Line className="menuIcon" onClick={CloseToggle} />
            ) : (
              <BsXLg className="crossIcon" onClick={menuToggle} />
            )}
          </div>
        </div>
      </nav>

      <div className="sidebar">
        {showSidebar && (
          <motion.ul
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
            className="nav-list"
          >
            <motion.li
              onClick={() => setShowSidebar(false)}
              whileHover={{ y: -3 }}
            >
              <Link to="/">Home</Link>
            </motion.li>

            <motion.li whileHover={{ y: -3 }}>
              <Link to="/menu" onClick={() => setShowSidebar(false)}>
                Menu
              </Link>
            </motion.li>

            <motion.li whileHover={{ y: -3 }}>
              <Link onClick={() => setShowSidebar(false)} to="/about">
                About
              </Link>
            </motion.li>
          </motion.ul>
        )}

        {showSidebar && (
          <motion.div
            whileTap={{ scale: 0.8 }}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ delay: 0.3 }}
            className="basket"
            onClick={() => {
              showCart();
              showCartHandler();
            }}
          >
            <FaShoppingBasket className="basketIcon" />

            {cart && cart.length > 0 && (
              <p className="basketItem">{totalItems}</p>
            )}
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default MobileNavbar;
