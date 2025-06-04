import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import ProductDescription from "./ProductionDescription";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const restInfo = useRestaurantMenu(resId);

  if (restInfo === null) return <Shimmer />;

  const {
    name,
    cuisines,
    costForTwoMessage,
    avgRating,
    areaName,
    sla,
    totalRatingsString,
  } = restInfo?.cards[2]?.card?.card?.info;

  // Find the grouped card section
  const regularCards = restInfo?.cards?.find(
    (card) => card?.groupedCard?.cardGroupMap?.REGULAR
  )?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* {header section} */}
      <div className="border-b pb-6 mb-6">
        <h1 className="text-3xl font-bold">{name}</h1>
        <div className="flex space-x-4 mt-2">
          <span className="text-orange-500 font-semibold border-b-2 border-orange-600 pb-1 cursor-pointer">
            Order Online
          </span>
          <span className="text-gray-500 cursor-pointer hover:text-orange-500">
            Dineout
          </span>
        </div>

        <div className="flex flex-col md:flex-row justify-between mt-4 text-sm text-gray-700">
          <div className="flex space-x-2 items-center">
            <span className="text-green-600 font-semibold">
              <i className="fa-solid fa-star mr-1"></i> {avgRating} (
              {totalRatingsString})
            </span>{" "}
            <span className="mx-1 text-gray-400">•</span>
            <span>{costForTwoMessage}</span>
          </div>

          <div className="mt-2 md:mt-0text-sm text-gray-600">
            <div>{cuisines.join(", ")}</div>
            <div className="flex space-x-2 mt-1">
              <span className="text-black font-semibold">Outlet</span>
              <span>{areaName}</span>
              <span className="mx-1 text-gray-400">•</span>
              <span>{sla?.slaString}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Menu Section -- Loop through all sections */}
      {regularCards?.map((card, index) => {
        const section = card?.card?.card;

        if (section?.itemCards?.length > 0 && section?.title) {
          return (
            <div key={index} className="mb-8">
              <h2 className="text-xl font-semibold mb-4">{section.title}</h2>
              <div className="space-y-6">
                {section.itemCards.map((item) => {
                  const info = item.card.info;
                  const imageId = info.imageId || info.cloudinaryImageId;
                  const imageUrl = imageId
                    ? `https://media-assets.swiggy.com/swiggy/image/upload/w_512,h_384,c_fill/${imageId}`
                    : "https://via.placeholder.com/150";

                  return (
                    <div className="flex justify-between items-start border-b pb-4" key={info.id}>
                      <div className="w-3/4 pr-4">
                        <h4 className="font-semibold text-base">{info.name}</h4>
                        <p className="text-gray-600  mt-1">
                          ₹{info.price / 100 || info.defaultPrice / 100}
                        </p>
                        <ProductDescription description={info.description} />
                      </div>
                      <div className="w-1/4 relative">
                        <img
                          className="w-full h-24 object-cover rounded-lg shadow-sm"
                          src={imageUrl}
                          alt={info.name}
                        />
                        <button className="absolute bottom-0 left-1/2 bg-white border  text-green-600 font-semibold text-sm px-3 py-1 rounded transform-translate-x-1/2 translate-y-1/2 shadow hover:bg-green-50">
                          ADD
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        }

        if (section?.categories?.length > 0) {
          return section.categories.map((cat, catIndex) => (
            <div key={`${index}-${catIndex}`} className="menu-section">
              <h2 className="menu-section-title">{cat.title}</h2>
              <div className="menu-list">
                {cat.itemCards?.map((item) => {
                  const info = item.card.info;
                  const imageId = info.imageId || info.cloudinaryImageId;
                  const imageUrl = imageId
                    ? `https://media-assets.swiggy.com/swiggy/image/upload/w_512,h_384,c_fill/${imageId}`
                    : "https://via.placeholder.com/150";

                  return (
                    <div className="menu-items" key={info.id}>
                      <div className="menu-info">
                        <h4 className="menu-title">{info.name}</h4>
                        <p className="menu-price">
                          ₹{info.price / 100 || info.defaultPrice / 100}
                        </p>
                        <ProductDescription description={info.description} />
                      </div>
                      <div className="menu-image-wrapper">
                        <img
                          className="menu-image"
                          src={imageUrl}
                          alt={info.name}
                        />
                        <button className="add-btn">ADD</button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ));
        }
        return null;
      })}
    </div>
  );
};
export default RestaurantMenu;
