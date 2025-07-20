import { useState, useEffect } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    console.log(json.data);
    setResInfo(json);
  };
  return resInfo;
};

export default useRestaurantMenu;

//  const fetchMenu = async () => {
//     const data = await fetch(MENU_API + resId);

//     const jsonData = await data.json();
//     console.log(jsonData);
//     setResInfo(jsonData);
//   };
