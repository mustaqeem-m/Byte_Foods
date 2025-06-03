import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Body from "./Components/Body";
import { Header } from "./Components/Header.js";
import { RestaurantCard } from "./Components/RestaurantCard.js";
import Contact from "./Components/Contact.js";
import Error from "./Components/Error.js";
import RestaurantMenu from "./Components/RestaurantMenu.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const Grocery = lazy(() => {
  return import("./Components/Grocery.js");
});

const About = lazy(() => {
  return import("./Components/About.js");
});

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
        element: (
          <Suspense fallback={<h1>Hold on , You are almost there</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/Grocery",
        element: (
          <Suspense fallback={<h1>Hold on , You are almost there</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(JSXheading);
root.render(<RouterProvider router={appRouter} />);
