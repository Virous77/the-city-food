import React from "react";
import "../../styles/Footer.css";

const Footer = () => {
  const date = new Date().getFullYear();
  return <footer>{date} All rights reserved</footer>;
};

export default Footer;
