import { Link } from "react-router-dom";
import { SRC_URL } from "../utils/constants.js";
import { useContext, useState } from "react";
import useStatus from "../utils/useStatus.js";
import UserContext from "../utils/UserContext.js";

export const Header = () => {
  const [btn_text, setBtn_text] = useState("Login");
  const Status = useStatus();
  const userInfo = useContext(UserContext);

  return (
    <div className="flex justify-between border-2 rounded-3xl border-cyan-400 p-4 mt-1">
      <div className="logo-container">
        <img
          className="w-60 m-6
        "
          src={SRC_URL}
        />
      </div>
      <div className="flex items-center">
        <ul className="flex">
          <li className="px-4">User Status : {Status ? "🍏" : "🍎"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/About">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/Contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/Grocery">Grocery</Link>
          </li>
          <li className="px-4">
            <button
              className="px-4 bg-green-200 py-1 rounded-md mb-0 cursor-pointer"
              onClick={() => {
                btn_text === "Login"
                  ? setBtn_text("Logout")
                  : setBtn_text("Login");
              }}
            >
              {btn_text}
            </button>
          </li>
          <li>
            <button className="px-4 bg-gray-200 py-1 rounded-md mb-0 cursor-pointer">
              {"👤" + " " + userInfo.defaultName}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
