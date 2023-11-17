import React from "react";
import "./Button.css";
const Button = ({ text, type }) => {
  return <button className={`button ${type}`}>{text}</button>;
};

export default Button;
