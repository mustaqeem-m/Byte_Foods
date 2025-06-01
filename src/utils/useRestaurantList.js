import { useState, useEffect } from "react";
import { HOME_CARDS_URL } from "./constants";

const useRestaurantList = () => {
  const [resListState, setResListState] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch(HOME_CARDS_URL);
        const json_data = await data.json();

        const restaurantCard = json_data?.data?.cards?.find(
          (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants
        );

        const restaurantList =
          restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants;

        setResListState(Array.isArray(restaurantList) ? restaurantList : []);
      } catch (err) {
        console.error("API Error", err);
        setResListState([]);
      }
    };

    fetchData();
  }, []);

  return [resListState, setResListState];
};

export default useRestaurantList;
