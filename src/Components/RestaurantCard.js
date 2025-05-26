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
    <div className="res-card">
      <img
        className="res-logo"
        src={SWIGGY_CDN_BASE + cloudinaryImageId}
        alt={resData.info.name}
      />
      <h3>{resData.info.name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h3>{costForTwo}</h3>
      <h3>⭐{avgRating}</h3>
      <h3>{areaName}</h3>
    </div>
  );
};
