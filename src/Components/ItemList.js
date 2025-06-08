import { SWIGGY_CDN_BASE } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/Slices/CartSlice";

export const ItemList = ({ items }) => {
  const dispatch = useDispatch()
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };
  return (
    <div>
      {items.map((item, index) => {
        const {
          name,
          id,
          price,
          description,
          imageId,
          defaultPrice,
          vegClassifier,
        } = item?.card?.info || {};

        return (
          <div
            key={id || index}
            className="p-4 mb-4 rounded-xl g-white/40 backdrop-blur-md shadow-lg flex justify-between items-start gap-4 transition duration-300 hover:shadow-2xl hover:scale-[1.01]"
          >
            <div className="flex flex-col text-left w-full pr-4">
              <div className="flex items-center gap-2 font-semibold">
                {vegClassifier === "VEG" && (
                  <span className="inline-block w-3 h-3 rounded-full border border-green-600 bg-green-600"></span>
                )}
                {vegClassifier === "NONVEG" && (
                  <span className="inline-block w-3 h-3 rounded-full border border-red-600 bg-red-600"></span>
                )}
                {name}
              </div>

              <div className="text-sm text-gray-700 font-medium">
                - ₹ {(price ? price / 100 : defaultPrice / 100).toFixed(0)}
              </div>
              <p className="text-xs text-gray-500 font-light">{description}</p>
            </div>

            {imageId && (
              <div className="relative">
                <img
                  src={SWIGGY_CDN_BASE + imageId}
                  alt={name}
                  className="w-28 h-24 rounded-md object-cover shadow"
                />

                <button
                  className="absolute bottom-0 left-1/2 transform -translate-x-0.5 translate-y-0.5 bg-white text-green-600 font-bold text-sm px-3 py-1 rounded shadow-md cursor-pointer hover:bg-green-100 hover:sacle-110 transition-all duration-300"
                  onClick={() => handleAddItem(item)}
                >
                  ADD
                </button>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
