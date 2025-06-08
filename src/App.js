import React, { lazy, Suspense, useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Body from "./Components/Body";
import { Header } from "./Components/Header.js";
import { RestaurantCard } from "./Components/RestaurantCard.js";
import Contact from "./Components/Contact.js";
import Error from "./Components/Error.js";
import RestaurantMenu from "./Components/RestaurantMenu.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import UserContext from "./utils/UserContext.js";
import { Provider } from "react-redux";
import appStore from "./utils/AppStore.js";
import Cart from "./Components/Cart.js";

const Grocery = lazy(() => {
  return import("./Components/Grocery.js");
});

const About = lazy(() => {
  return import("./Components/About.js");
});

const AppLayout = () => {
  const [userName, setUserName] = useState();
  useEffect(() => {
    //make a API call

    const data = {
      userName: "mustaqeem-m",
      userId: 7272727,
      DOB: "19-oct-2002",
    };
    setUserName(data.userName);
  }, []);

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ defaultName: userName }}>
        <div className="app-container">
          <Header /> {/* //? remain Intact */}
          <Outlet />
          {/*//? it changes based on route changes, it ll get replaced with 
      //?the corresponding Component according to the path*/}
        </div>
      </UserContext.Provider>
    </Provider>
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
      {
        path: "/Cart",
        element: (
          <Suspense fallback={<h1>Hod On!!</h1>}>
            <Cart />
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
