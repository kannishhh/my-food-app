import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    sla,
    aggregatedDiscountInfoV3,
    locality,
  } = resData?.info;

  return (
    <div className="w-64 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden cursor-pointer">
      <div className="relative">
        <img
          className="w-full h-40 object-cover"
          src={CDN_URL + cloudinaryImageId}
          alt={name}
        />
        {aggregatedDiscountInfoV3?.header && (
          <div className="absolute bottom-2 left-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded-md">
            {aggregatedDiscountInfoV3?.header}{" "}
            {aggregatedDiscountInfoV3?.subHeader}
          </div>
        )}
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 truncate">{name}</h3>
        <div className="flex items-center text-sm text-gray-600 my-1">
          <span className="text-green-600 font-semibold items-center">
            <i className="fa-solid fa-star mr-1 text-xs"></i>
            {avgRating}
          </span>
          <span className="mx-1">•</span>
          <span >{sla?.slaString}</span>
        </div>
        <p className="text-sm text-gray-500 truncate">{cuisines.join(", ")}</p>
        <span className="text-sm text-gray-500 truncate">{locality}</span>
      </div>
    </div>
  );
};

export default RestaurantCard;
