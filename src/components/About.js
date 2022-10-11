import React from "react";
import "../styles/About.css";
import first from "../images/upit.jpg";
import second from "../images/second.jpg";
import third from "../images/third.jpg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="about">
      <div className="aboutSection">
        <div className="aboutImg">
          <div className="gridIt">
            <motion.img
              src={first}
              alt="About Team"
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -100 }}
              transition={{ delay: 0.4 }}
            />
            <motion.img
              src={second}
              alt="About Team"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              transition={{ delay: 0.5 }}
            />
          </div>

          <motion.img
            src={third}
            alt="About Team"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ delay: 0.6 }}
          />
        </div>

        <div className="aboutUs">
          <div className="aboutHead">
            <h1>City Food</h1>
          </div>

          <motion.div
            className="aboutInfo"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.2 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
          >
            <p>
              All great deeds and all great thoughts have a ridiculous
              beginning. Great works are often born on a street corner or in a
              restaurant's revolving door.
              <br />
              <div className="lineGap"></div>
              Going to a restaurant is one of my keenest pleasures. Meeting
              someplace with old and new friends, ordering wine, eating food,
              surrounded by strangers, I think is the core of what it means to
              live a civilised life.
              <br />
              <div className="lineGap"></div>
              I'm very low-key. I don't really blend in, so it's difficult to go
              out in public. I like to do things that are kind of quiet, whether
              it's a dinner at my house or a restaurant, or a movie night at
              home.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
