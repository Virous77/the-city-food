import React from "react";
import "../styles/Menu.css";
import { MdFastfood } from "react-icons/md";
import { motion } from "framer-motion";

const Reusable = ({ category, setFilter, filter }) => {
  return (
    <motion.main
      whileTap={{ scale: 0.95 }}
      className="menu"
      onClick={() => setFilter(category.urlParaName)}
    >
      <div
        className={`menuCard ${
          filter === category.urlParaName ? " active" : "noactive"
        }`}
      >
        <div
          className={`menuRound ${
            filter === category.urlParaName ? "noactive" : "active"
          }`}
        >
          <MdFastfood
            className={`IoIcon ${
              filter === category.urlParaName ? " activec" : "noactivec"
            }`}
          />
        </div>
        <p
          className={` p  ${
            filter === category.urlParaName ? " noactivec" : "activec"
          }`}
        >
          {category.name}
        </p>
      </div>
    </motion.main>
  );
};

export default Reusable;
