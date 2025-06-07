import { ItemList } from "./ItemList";
import { useState } from "react";

export const RestaurantCategory = ({ data, showItem, clickedIndex }) => {
  //! controlled component =>  rely on its parent ( <RestaurantMenu/> ) response to decide what to do , doesn't have its own state
  if (!data) return null;

  const { title, itemCards } = data;
  const handleClick = (showItem) => {
    clickedIndex();
  };
  if (!itemCards || itemCards.length === 0) return null;
  return (
    <div>
      {
        <div className="w-11/12 md:w-7/12 mx-auto my-4 bg-white rounded-xl shadow-md transition-all duration-300 ">
          <div
            className="flex justify-between cursor-pointer items-center p-4 hover:bg-gray-100 transition-colors"
            onClick={handleClick}
          >
            <span className=" items-center font-bold text-lg">
              {title}({itemCards?.length})
            </span>
            <span
              className={`cursor-pointer text-2xl transition-tranform duration-[500ms] ${
                showItem ? "rotate-180" : "rotate-0"
              } `}
            >
              <span
                className={`cursor-pointer text-xl transition-transform duration-300 ${
                  showItem ? "rotate-180" : "rotate-0"
                }`}
              >
                🔽
              </span>{" "}
            </span>
          </div>
          <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
            showItem 
            ? "max-h-[1000px] opacity-100 scale-100"
            : "max-h-0 opacity-0 scale-95"
          }` }>
            {showItem && (
              <div className="p-4">
                <ItemList items={data.itemCards} />
              </div>
            )}
          </div>
        </div>
      }
    </div>
  );
};
