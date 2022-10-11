import React from "react";
import { FaShoppingBasket } from "react-icons/fa";
import "../styles/FilterData.css";
import Loader from "../UI/Loader";
import Notfound from "../images/NotFound.svg";
import { useCartContext } from "../store/CartContext";
import { motion } from "framer-motion";

const FilterData = ({ data }) => {
  const { addToCart } = useCartContext();
  if (data?.length === 0) {
    return (
      <article className="emptyDish">
        <img src={Notfound} alt="not found" />
        <p>Currently not available,Try other Dish</p>
      </article>
    );
  }
  return (
    <motion.main className="foodContainerss">
      {data ? (
        data?.map((item) => (
          <div
            className="card"
            key={item.id}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
          >
            <h3>{item.title}</h3>

            <section className="subFoodContainers">
              <div className="foodImage">
                <img src={item.imageURL} alt={item.title} />
              </div>

              <div className="foodInfo">
                <div className="cartConta">
                  <FaShoppingBasket
                    className="cartIcon"
                    onClick={() => addToCart(item)}
                  />
                </div>

                <div className="foodDetails">
                  <div>
                    <p>{item.calory} Calories</p>
                    <h5>
                      <span>$</span> {item.price}
                    </h5>
                  </div>
                </div>
              </div>
            </section>
          </div>
        ))
      ) : (
        <div className="fact">
          <Loader />
        </div>
      )}
    </motion.main>
  );
};

export default FilterData;
