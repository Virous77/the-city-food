import React from "react";
import "../../styles/Home.css";
import deliveryBoy from "../../images/delivery.png";
import hero from "../../images/heroBg.png";
import I1 from "../../images/i1.png";
import F7 from "../../images/f7.png";
import R2 from "../../images/r2.png";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <section className="homeSection">
      <motion.div
        className="firstConta"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ delay: 0.4 }}
      >
        <div className="aboutService">
          <p>Bikee Delivery</p>

          <div className="delivery">
            <img src={deliveryBoy} alt="Bikee Delivery" />
          </div>
        </div>

        <h3>
          The Fastest Delivery
          <br />
          <p className="city">
            <span>in</span> Your City
          </p>
        </h3>

        <p className="aboutMessage">
          People who love to eat are always the best people. To eat is a
          necessity, but to eat intelligently is an art. We all eat, an it would
          be a sad waste of opportunity to eat badly. If you really want to make
          a friend, go to someone's house and eat with him...the people who give
          you their food give you their heart.
        </p>

        <div className="homeButton">
          <button type="button">Order Now</button>
        </div>
      </motion.div>

      <div className="secondConta">
        <div className="hero">
          <img src={hero} alt="hero" />
        </div>

        <motion.div
          initial={{ opacity: 0, x: -150 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -150 }}
          transition={{ delay: 0.6 }}
          className="heroInfo"
        >
          <img src={I1} alt="sub-hero" />

          <h4>Ice Cream</h4>
          <p>Chocolate & Vanila</p>
          <h5>
            {" "}
            <span>$</span>5.65
          </h5>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -150 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -150 }}
          transition={{ delay: 0.7 }}
          className="heroInfo2"
        >
          <img src={F7} alt="sub-hero" />

          <h4>Strwaberry</h4>
          <p>Healthy & Delcious</p>
          <h5>
            <span>$</span>20.65
          </h5>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 150 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 150 }}
          transition={{ delay: 0.8 }}
          className="heroInfo3"
        >
          <img src={R2} alt="sub-hero" />

          <h4>Chicken Fry</h4>
          <p>Spicy & Delcious</p>
          <h5>
            <span>$</span>33.65
          </h5>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
