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
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
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
