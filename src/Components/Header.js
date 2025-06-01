import { Link } from "react-router-dom";
import { SRC_URL } from "../utils/constants.js";
import { useState } from "react";
import useStatus from "../utils/useStatus.js";

export const Header = () => {
  const [btn_text, setBtn_text] = useState("Login");
  const Status = useStatus();
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={SRC_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>User Status : {Status ? "🍏" : "🍎"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About Us</Link>
          </li>
          <li>
            <Link to="/Contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/Grocery">Grocery</Link>
          </li>
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
