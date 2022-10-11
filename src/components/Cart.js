import React from "react";
import "../styles/Cart.css";
import { motion } from "framer-motion";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { useCartContext } from "../store/CartContext";

import emptyCart from "../images/emptyCart.svg";
import { useStateValue } from "../store/StateProvider";
import CartList from "./layout/CartList";

const Cart = () => {
  const { hideCart, cart, clearCart, totalAmount, shippingFee } =
    useCartContext();

  const { user, loginUser } = useStateValue();

  return (
    <motion.main
      className="cart"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ delay: 0.3 }}
    >
      <motion.div
        className="cartHead"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        transition={{ delay: 0.7 }}
      >
        <FaLongArrowAltLeft className="exitIcon" onClick={hideCart} />
        <h2>Your Cart</h2>
        <p className="mobileClear" onClick={clearCart}>
          Clear Cart
        </p>
      </motion.div>

      <motion.div
        className="clearCart"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 30 }}
        transition={{ delay: 0.7 }}
      >
        <p onClick={clearCart}>Clear Cart</p>
      </motion.div>

      {cart.length > 0 ? (
        <div className="cartHeight">
          {cart?.map((item) => (
            <CartList key={item.id} {...item} />
          ))}
        </div>
      ) : (
        <div className="cartHeights">
          <img src={emptyCart} alt="" className="emptyCart" />
          <p>Cart is Empty</p>
        </div>
      )}

      {cart.length > 0 && (
        <div>
          <div className="totalAmmount">
            <div className="subTotal">
              <p className="subTitle">Sub Total</p>

              <p className="subTitle">${totalAmount}</p>
            </div>

            <div className="delivery">
              <p className="subTitle">Delivery</p>

              <p className="subTitle">$5</p>
            </div>

            <hr />

            <div className="total">
              <p className="subTitle">Total</p>

              <p className="subTitle">${totalAmount + shippingFee}</p>
            </div>

            {user ? (
              <div className="checkoutButton">
                <button>Check Out</button>
              </div>
            ) : (
              <div className="checkoutButton" onClick={loginUser}>
                <button>Log In</button>
              </div>
            )}
          </div>
        </div>
      )}
    </motion.main>
  );
};

export default Cart;
