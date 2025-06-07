import { useEffect, useState } from "react";
import ShimmerCard from "../utils/Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { RestaurantCategory } from "./RestautrantCategory";

//! Uncontrolled Component does'nt depends on other comps , have its own  state => not controlled by external comps.
const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(null);

  if (resInfo === null) {
    return <ShimmerCard />;
  }
  const info = resInfo?.data?.cards[2]?.card?.card?.info;

  const regularCards =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  const categories = regularCards?.filter(
    (c) =>
      c.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  return (
    <div className="menu">
      <div className="text-center">
        <h1 className="font-bold my-6 text-2xl">{info.name}</h1>
        <p className="text-lg">
          {info.cuisines.join(", ")} - {info.costForTwoMessage}
        </p>

        {/* Category Accordion */}
        {categories?.map((category, index) => {
          const card = category?.card?.card;
          const key = card?.id || `${card?.title}-${index}`;
          return (
            <RestaurantCategory
              key={key}
              data={card}
              showItem={index === showIndex ? true : false}
              clickedIndex={() => {
                setShowIndex((prevIndex) =>
                  prevIndex === index ? null : index
                );
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
