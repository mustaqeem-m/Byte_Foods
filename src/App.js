import React from "react";
import ReactDOM from "react-dom/client";
import Body from './Components/Body';
import { Header } from "./Components/Header.js";
import { RestaurantCard } from "./Components/RestaurantCard.js";
import "../index.css";

const AppLayout = () => {
  return (
    <div className="app-container">
      <Header></Header>
      <Body></Body>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(JSXheading);
root.render(<AppLayout />);
