import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [showIndex, setShowIndex] = useState(null);

  const restInfo = useRestaurantMenu(resId);

  if (restInfo === null) return <Shimmer />;

  const {
    name,
    cuisines,
    avgRating,
    totalRatingsString,
    sla,
    costForTwoMessage,
    areaName,
    id,
    cloudinaryImageId,
  } = restInfo?.cards[2]?.card?.card?.info;

  // const itemCards =
  //   restInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  const categories =
    restInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" ||
        c?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
    );

  // console.log(categories);

  return (
    <div className="text-center">
      {/* {header section} */}
      <div className="border-b pb-6 mt-10 mx-60">
        <h1 className="text-left text-3xl font-bold">{name}</h1>
        <div className="flex space-x-4 mt-2">
          <span className="text-orange-500 font-semibold border-b-2 border-orange-600 pb-1 cursor-pointer">
            Order Online
          </span>
          <span className="text-gray-500 cursor-pointer hover:text-orange-500">
            Dineout
          </span>
        </div>

        <div className="w-9/12 flex flex-col md:flex-row justify-between mt-4 text-sm text-gray-700 border-2 rounded-2xl shadow-lg shadow-gray-400">
          <div className="flex space-x-2 items-center py-5 px-3">
            <span className="text-green-600 font-semibold">
              <i className="fa-solid fa-star mr-1"></i> {avgRating} (
              {totalRatingsString})
            </span>{" "}
            <span className="mx-1 text-gray-400">•</span>
            <span>{costForTwoMessage}</span>
          </div>

          <div className="py-10 px-3 md:mt-0text-sm text-gray-600 ">
            <div className=" text-md text-orange-600 underline font-bold">
              {cuisines.join(", ")}
            </div>
            <div className="flex space-x-2 mt-3">
              <span className="text-black font-semibold">Outlet</span>
              <span>{areaName}</span>
              <span className=" text-gray-400">•</span>
              <span>{sla?.slaString}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Categories accordian*/}
      {categories.map((category, index) => (
        <RestaurantCategory
          data={category?.card?.card}
          key={category?.card?.card?.title}
          index={index}
          showItems={index === showIndex}
          setShowIndex={setShowIndex}
          restInfo={{ id, name, cloudinaryImageId }}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
