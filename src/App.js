import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./Components/Body";
import { Header } from "./Components/Header.js";
import { RestaurantCard } from "./Components/RestaurantCard.js";
import About from "./Components/About.js";
import Contact from "./Components/Contact.js";
import Error from "./Components/Error.js";
import RestaurantMenu from "./Components/RestaurantMenu.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "../index.css";

const AppLayout = () => {
  return (
    <div className="app-container">
      <Header /> {/* //? remain Intact */}
      <Outlet />
      {/*//? it changes based on route changes, it ll get replaced with 
      //?the corresponding Component according to the path*/}
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      }
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(JSXheading);
root.render(<RouterProvider router={appRouter} />);
