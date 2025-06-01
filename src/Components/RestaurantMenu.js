import { useEffect, useState } from "react";
import ShimmerCard from "../utils/Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);
  if (resInfo === null) {
    return <ShimmerCard />;
  }

  const info = resInfo?.data?.cards[2]?.card?.card?.info;
  const itemCards =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
      ?.map((c) => c.card?.card?.itemCards)
      ?.filter(Boolean)
      ?.flat();
  const regularCards =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  return (
    <div className="menu">
      <h1>{info.name}</h1>
      <p>
        {info.cuisines?.join(", ")} - {info?.costForTwoMessage}
      </p>
      <h3>
        {info.avgRating}⭐ / {info.totalRatingsString}
      </h3>
      <h3>{info?.areaName}</h3>

      {regularCards?.map((categoryBlock, index) => {
        const category = categoryBlock.card?.card;

        if (!category?.itemCards) return null;

        return (
          <div key={category.title || index}>
            <h3>{category.title}</h3>
            <ul>
              {category.itemCards.map((item) => {
                const itemInfo = item.card.info;
                return (
                  <li key={itemInfo.id}>
                    {itemInfo.name} - ₹
                    {(itemInfo.price || itemInfo.defaultPrice) / 100}{" "}
                    {/* {itemInfo.vegClassifier === "NONVEG" ? "🟢" : "🔴"} */}
                    {itemInfo.itemAttribute?.vegClassifier?.toUpperCase() ===
                    "VEG"
                      ? "🟢"
                      : "🔴"}
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
