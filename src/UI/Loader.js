import React from "react";
import "./Loader.css";
import { ImSpinner9 } from "react-icons/im";

const Loader = () => {
  return (
    <section className="loader">
      <ImSpinner9 className="loaderIcon" />
    </section>
  );
};

export default Loader;
