import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <h1 className="title">Employee Tracker</h1>
      <button className="add-new">Add new entry</button>
    </div>
  );
};

export default Header;
