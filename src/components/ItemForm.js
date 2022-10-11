import React from "react";
import "../styles/ItemForm.css";
import { useFormContext } from "../store/formContext";
import {
  MdFastfood,
  MdCloudUpload,
  MdDelete,
  MdFoodBank,
  MdAttachMoney,
} from "react-icons/md";
import { categories } from "../Utils/data";
import Loader from "../UI/Loader";
import { motion } from "framer-motion";
import { FaSortAmountUpAlt } from "react-icons/fa";

const ItemForm = () => {
  const {
    title,
    setTitle,
    calories,
    setCalories,
    category,
    setCategory,
    price,
    setPrice,
    isLoading,
    formSubmit,
    imgAssest,
    uploadImage,
    deleteImage,
    qty,
    setQty,
  } = useFormContext();

  return (
    <section className="itemFormBar">
      <form onSubmit={formSubmit}>
        <div className="title">
          <label htmlFor="foodtitle">
            <MdFastfood />
          </label>
          <input
            type="text"
            placeholder="Enter Food Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="category">
          <select
            onChange={(e) => setCategory(e.target.value)}
            value={category}
          >
            <option value="other">Select Category</option>
            {categories &&
              categories.map((item) => (
                <option key={item.id} value={item.urlParaName}>
                  {item.name}
                </option>
              ))}
          </select>
        </div>

        <div className="imageUpload">
          {isLoading && <Loader />}
          {!imgAssest ? (
            <div>
              {!isLoading && (
                <div>
                  <label name="uploadImage">
                    <MdCloudUpload className="uploadIcon" />
                  </label>

                  <input
                    type="file"
                    name="uploadImage"
                    accept="image/'*"
                    onChange={uploadImage}
                  />
                </div>
              )}
            </div>
          ) : (
            <>
              {!isLoading && (
                <div className="changeImage">
                  <img src={imgAssest} alt="uploaded image" />
                  <button type="button" onClick={deleteImage}>
                    <MdDelete className="deleteIcon" />
                  </button>
                </div>
              )}
            </>
          )}
        </div>

        <div className="calory">
          <MdFoodBank className="foodbankIcon" />
          <input
            type="text"
            placeholder="Enter Food Calories"
            value={calories}
            onChange={(e) => setCalories(e.target.value)}
          />
        </div>

        <div className="calory">
          <MdAttachMoney className="foodbankIcon" />
          <input
            type="text"
            placeholder="Enter Food Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <div className="calory">
          <FaSortAmountUpAlt className="foodbankIcon" />
          <input
            type="text"
            placeholder="Enter Quantity"
            value={qty}
            onChange={(e) => setQty(e.target.value)}
          />
        </div>

        <motion.div
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.02 }}
          className="formAddButton"
        >
          <button>Submit</button>
        </motion.div>
      </form>
    </section>
  );
};

export default ItemForm;
