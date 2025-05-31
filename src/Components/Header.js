import { Link } from "react-router-dom";
import { SRC_URL } from "../utils/constants.js";
import { useState } from "react";

export const Header = () => {
  const [btn_text, setBtn_text] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={SRC_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/About">About Us</Link></li>
          <li><Link to="/Contact">Contact Us</Link></li>
          <li><Link to="/Cart">Cart</Link> </li>
          <button
            className="login-btn"
            onClick={() => {
              btn_text === "Login"
                ? setBtn_text("Logout")
                : setBtn_text("Login");
            }}
          >
            {btn_text}
          </button>
        </ul>
      </div>
    </div>
  );
};
