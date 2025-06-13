import { SWIGGY_CDN_BASE } from "../utils/constants";
export const RestaurantCard = ({ resData }) => {
  const {
    cloudinaryImageId,
    name,
    cuisines,
    locality,
    avgRating,
    areaName,
    costForTwo,
  } = resData.info;

  return (
    <div data-testid="resCard" className="res-card rounded-2xl">
      <img
        className="res-logo rounded-2xl"
        src={SWIGGY_CDN_BASE + cloudinaryImageId}
        alt={resData.info.name}
      />
      <h3 className="font-bold py-4 text-lg">{resData.info.name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h3>{costForTwo}</h3>
      <h3>⭐{avgRating}</h3>
      <h3>{areaName}</h3>
    </div>
  );
};

export const WithPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div data-testid="PromotedCard" className="relative">
        <label className="absolute top-2 left-2 bg-gradient-to-r from-pink-500 to-yellow-500 text-white text-xs px-3 py-1 font-semibold rounded-full shadow-md backdrop-blur-sm hover:scale-105 transition-transform duration-200">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
