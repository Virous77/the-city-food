import React, { useEffect, useState } from "react";
import "../styles/Menu.css";
import { categories } from "../Utils/data";
import Reusable from "./Reusable";
import { useStateValue } from "../store/StateProvider";
import FilterData from "./FilterData";
import { motion } from "framer-motion";

const Menu = () => {
  const [filter, setFilter] = useState("chicken");
  const { foodItems } = useStateValue();

  useEffect(() => {}, [filter]);

  return (
    <main className="menu">
      <div className="hoTitle">
        <h1>Our Hot Dishes</h1>
        <p className="lines"></p>
      </div>

      <motion.div
        className="menuIcons"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
        transition={{ delay: 0.4 }}
      >
        {categories &&
          categories.map((category) => (
            <Reusable
              category={category}
              filter={filter}
              setFilter={setFilter}
              key={category.id}
            />
          ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ delay: 0.6 }}
      >
        <FilterData data={foodItems?.filter((n) => n.category === filter)} />
      </motion.div>
    </main>
  );
};

export default Menu;
