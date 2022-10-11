import React from "react";
import { useStateValue } from "../store/StateProvider";
import "../styles/Food.css";
import FoodList from "./FoodList";
import Loader from "../UI/Loader";

const Food = () => {
  const { foodItems } = useStateValue();

  return (
    <section className="">
      <div className="foodSection">
        <div className="headingFood">
          <div className="foodHeadTitle">
            <h2>Our Fresh & Healthy Fruits</h2>
            <p className="line"></p>
          </div>
        </div>

        <div className="foodContainers">
          {foodItems ? (
            foodItems?.map((item, idx) =>
              item.category === "fruits" ? (
                <FoodList key={item.id} index={idx} item={item} />
              ) : (
                ""
              )
            )
          ) : (
            <Loader />
          )}
        </div>
      </div>
    </section>
  );
};

export default Food;
