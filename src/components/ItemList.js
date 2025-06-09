/* eslint-disable jsx-a11y/alt-text */
import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import ProductDescription from "./ProductionDescription";
import { addItems } from "../store/cartSlice";

const ItemList = ({ items, restInfo }) => {
  const dispatch = useDispatch();

  const handleAdd = (item) => {
    dispatch(
      addItems({
        id: item.card.info.id,
        name: item.card.info.name,
        price: item.card.info.price / 100,
        image: item.card.info.imageId,
        restaurant: {
          id: restInfo?.id,
          name: restInfo?.name, 
          image: restInfo?.cloudinaryImageId, 
        },
      })
    );
  };

  return (
    <div>
      {items?.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="p-2 m-2 border-gray-300 border-b-2 text-left h-52 "
        >
          <div className="relative float-right flex flex-col items-center ">
            <img
              src={CDN_URL + item?.card?.info?.imageId}
              className="w-36 object-cover"
            />
            <div className="absolute top-28">
              <button
                className=" bottom-0 bg-black border text-white font-medium text-sm px-3 py-1 rounded-lg "
                onClick={() => handleAdd(item)}
              >
                ADD+
              </button>
            </div>
          </div>
          <div className="">
            <span className="font-bold text-lg text-gray-600 grid ">
              {item?.card?.info?.name}
            </span>
            <span className="font-semibold text-black">
              ₹{item?.card?.info?.price / 100}
            </span>
          </div>
          <span className="text-green-800 font-bold text-sm flex items-center my-3 ">
            <i className="fa-solid fa-star text-xs "></i>
            <span className="mx-1">
              {item?.card?.info?.ratings?.aggregatedRating?.rating}
            </span>{" "}
            (
            <span className="text-xs text-gray-500 ">
              {item?.card?.info?.ratings?.aggregatedRating?.ratingCountV2}
            </span>{" "}
            )
          </span>

          <ProductDescription
            description={item?.card?.info?.description}
          ></ProductDescription>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
