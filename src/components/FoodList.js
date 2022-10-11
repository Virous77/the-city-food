import React, { useEffect } from "react";
import "../styles/Food.css";
import { FaShoppingBasket } from "react-icons/fa";
import { useCartContext } from "../store/CartContext";
import { motion, useInView, useAnimation } from "framer-motion";

const FoodList = ({ item }) => {
  const { id, calories: calory, imageURL: image, price, title } = item;

  const { addToCart } = useCartContext();

  const addToCartHandller = (item) => {
    addToCart(item);
  };

  return (
    <motion.div
      className="card"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0 },
      }}
    >
      <h3>{title}</h3>

      <section className="subFoodContainers">
        <div className="foodImage">
          <img src={image} alt={title} />
        </div>

        <div className="foodInfo">
          <div className="cartConta" onClick={() => addToCartHandller(item)}>
            <FaShoppingBasket className="cartIcon" />
          </div>

          <div className="foodDetails">
            <div>
              <p>{calory} Calories</p>
              <h5>
                <span>$</span> {price}
              </h5>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default FoodList;
