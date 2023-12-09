import React from "react";
import "./Button.css";
const Button = ({ text, type ,onClick=()=>{}}) => {
  return <button onClick={onClick} className={`button ${type}`}>{text}</button>;
};

export default Button;
