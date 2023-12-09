import React from "react";
import "./Header.css";
const Header = ({tasks=[]}) => {
  return (
    <div  className="header">
      <div>لیست کارها</div>
      <div>{tasks.length}</div>
    </div>
  );
};

export default Header;
