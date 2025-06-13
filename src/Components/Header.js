import { Link } from "react-router-dom";
import { SRC_URL } from "../utils/constants.js";
import { useContext, useState } from "react";
import useStatus from "../utils/useStatus.js";
import UserContext from "../utils/UserContext.js";
import { useSelector } from "react-redux";

export const Header = () => {
  const [btn_text, setBtn_text] = useState("Login");
  const Status = useStatus();
  const userInfo = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="sticky top-0 z-50 rounded-xl shadow-md backdrop-blur-md bg-white/60 mx-2 px-6 py-2">
      <div className="flex items-center justify-between w-full">
        {/* LOGO */}
        <div className="logo-container">
          <img
            className="w-44 m-2 drop-shadow-md hover:scale-105 transition-transform duration-300"
            src={SRC_URL}
            alt="Logo"
          />
        </div>

        {/* NAV + BUTTONS */}
        <div className="flex items-center">
          <ul className="flex items-center space-x-5 font-medium text-gray-800 text-sm relative">
            {/* Status */}
            <li className="text-cyan-700 whitespace-nowrap">
              User Status: {Status ? "🍏" : "🍎"}
            </li>

            {/* Nav Links with Underline + Scooty */}
            {[
              { to: "/", label: "Home" },
              { to: "/About", label: "About Us" },
              { to: "/Contact", label: "Contact Us" },
              { to: "/Grocery", label: "Grocery" },
              { to: "/Cart", label: `Cart (${cartItems.length}-Items)` },
            ].map(({ to, label }, idx) => (
              <li key={idx} className="relative group overflow-hidden">
                <Link
                  to={to}
                  className="text-gray-800 hover:text-blue-600 transition-all duration-200"
                >
                  <span className="relative z-10">{label}</span>
                  <span className="absolute left-0 bottom-0 h-[2px] bg-blue-500 w-0 group-hover:w-full transition-all duration-300 z-0"></span>
                  <span className="absolute left-[-40px] bottom-[-14px] text-lg opacity-0 group-hover:opacity-100 group-hover:translate-x-[120px] transition-all duration-700 ease-out">
                    🛵
                  </span>
                </Link>
              </li>
            ))}

            {/* Login/Logout Button */}
            <li>
              <button
                className="px-3 py-1 rounded-md bg-gradient-to-r from-green-400 to-green-600 text-white hover:from-green-500 hover:to-green-700 shadow-sm transition-all duration-200"
                onClick={() => {
                  setBtn_text(btn_text === "Login" ? "Logout" : "Login");
                }}
              >
                {btn_text}
              </button>
            </li>

            {/* User Display */}
            <li>
              <button className="px-3 py-1 rounded-md bg-gray-900 text-white hover:bg-gray-700 shadow-sm transition-all duration-200">
                {"👤 " + userInfo?.defaultName}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
