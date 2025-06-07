import { RestaurantCard, WithPromotedLabel } from "./RestaurantCard.js";
import { useEffect, useState } from "react";
import ShimmerCard from "../utils/Shimmer.js";
import { Link } from "react-router-dom";
import useRestaurantList from "../utils/useRestaurantList.js";
import useStatus from "../utils/useStatus.js";

export const Body = () => {
  const [resListState, setResListState] = useRestaurantList();
  const [search_val, setSearch_val] = useState("");
  const Status = useStatus();
  const RestaurantCardPromoted = WithPromotedLabel(RestaurantCard);

  const getFilteredList = () => {
    if (!Array.isArray(resListState)) return [];

    if (search_val.trim()) {
      return resListState.filter((res) =>
        res.info.name.toLowerCase().includes(search_val.toLowerCase())
      );
    }

    return resListState;
  };

  if (Status === false) {
    return <h1>Sorry !!! , Pls check your internet connection</h1>;
  }
  console.log(resListState);

  if (!resListState || resListState.length === 0) {
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
      <div className="function-bar flex gap-5">
        <div className="search-group m-2 flex gap-8">
          <input
            type="text"
            className="search-bar border-1 rounded-md w-75"
            placeholder="Enter Key Word to search:"
            value={search_val}
            onChange={(e) => setSearch_val(e.target.value)}
          />
          <button
            className="search-btn bg-sky-200 px-4 py-1 rounded-md"
            onClick={() => {
              console.log("Search initiated");
            }}
          >
            Search
          </button>
        </div>

        <button
          className="js-top-rest-btn m-2 bg-sky-200 px-4 py-1 rounded-md"
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

      <div className="res-container flex flex-wrap justify-center gap-6 p-6">
        {getFilteredList().map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
            className="w-[250px]"
          >
            {restaurant.info.avgRating >= 4.5 ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
