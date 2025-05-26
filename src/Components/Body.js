import { RestaurantCard } from "./RestaurantCard.js";
import { resList } from "../utils/resObj_cloud_fixed.js";
import { useState } from "react";

export const Body = () => {
  const [resListState, setResListState] = useState(resList); 
  return (
    <div className="body">
      {/* <div className="search">Search</div> */}
      {
        <button
          // className="js-top-rest-btn"
          // onClick={() => {
          //   let topRatedRest = [];
          //   resList.filter((res) => {
          //     return res.info.avgRating >= 4.5;
          //   });
          //   console.log(resList);
          // }}
          className="js-top-rest-btn"
          onClick={() => {
            const topRatedRest = resList.filter(
              (res) => res.info.avgRating >= 4.0
            );
            setResListState(topRatedRest); // ✅ now logs only filtered results
          }}
        >
          Top rated restaurents!
        </button>
      }
      <div className="res-container">
        {resListState.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          );
        })}
      </div>
    </div>
  );
};

// const top_rated_rest = document.querySelector('.js-top-rest-btn')

// top_rated_rest.addEventListener('click',() => {
//   console.log('hi');
// })

export default Body;
