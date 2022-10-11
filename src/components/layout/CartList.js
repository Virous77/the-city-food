import React from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useCartContext } from "../../store/CartContext";
import { TiDelete } from "react-icons/ti";
import third from "../../images/third.jpg";

const CartList = ({ id, image, title, price, qty }) => {
  const { toggleCart, removeCartItem } = useCartContext();

  const increase = () => {
    toggleCart(id, "inc");
  };

  const decrease = () => {
    toggleCart(id, "dec");
  };

  return (
    <div className="cartContent">
      <div className="cartItem">
        <img src={image} alt="Food" />

        <div className="ItemNameInfo">
          <h4>{title}</h4>
          <p>
            <span>$</span>
            {price * qty}
          </p>
        </div>
      </div>

      <div className="cartButton">
        <div className="decrease">
          <AiOutlineMinus className="minus" onClick={decrease} />
        </div>
        <div className="amount">{qty}</div>
        <div className="increase">
          <AiOutlinePlus className="plus" onClick={increase} />
        </div>

        <div className="delete">
          <TiDelete onClick={() => removeCartItem(id)} />
        </div>
      </div>
    </div>
  );
};

export default CartList;
