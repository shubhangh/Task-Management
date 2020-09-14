import React from "react";
import logo from "../../assets/logo.svg";
import "./headerStyles.css";

function Header() {
  return (
    <div className={"headerContainer"}>
      <img src={logo} className="logo" alt="logo" />
      <h1 className={"title"}>Task Management</h1>
    </div>
  );
}

export default Header;
