import { RestaurantCard } from "./RestaurantCard.js";
import { useEffect, useState } from "react";
import ShimmerCard from "../utils/Shimmer.js";

export const Body = () => {
  const [resListState, setResListState] = useState([]);
  const [search_val, setSearch_val] = useState("");

  const getFilteredList = () => {
    if (search_val.trim()) {
      return resListState.filter((res) =>
        res.info.name.toLowerCase().includes(search_val.toLowerCase())
      );
    }
    return resListState;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch(
          "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0485682&lng=80.22062869999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json_data = await data.json();

        const restaurantCard = json_data?.data?.cards?.find(
          (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants
        );

        const restaurantList =
          restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants;

        setResListState(restaurantList || []);
      } catch (error) {
        console.error("Fetch Failed: ", error);
        setResListState([]);
      }
    };

    fetchData();
  }, []);

  if (resListState.length === 0) {
    return (
      <div className="res-container">
        {Array(8)
          .fill("")
          .map((_, i) => (
            <ShimmerCard key={i} />
          ))}
      </div>
    );
  }

  return (
    <div className="body">
      <div className="function-bar">
        <div className="search-group">
          <input
            type="text"
            className="search-bar"
            placeholder="Enter Key Word to search:"
            value={search_val}
            onChange={(e) => setSearch_val(e.target.value)}
          />
          <button
            className="search-btn"
            onClick={() => {
              console.log("Search initiated");
            }}
          >
            Search
          </button>
        </div>

        <button
          className="js-top-rest-btn"
          onClick={() => {
            const filtered = resListState.filter(
              (res) => res.info.avgRating >= 4.0
            );
            setResListState(filtered);
          }}
        >
          Top rated restaurents!
        </button>
      </div>

      <div className="res-container">
        {getFilteredList().map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
