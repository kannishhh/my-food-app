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
    <div className="menu-container">
      {/* {header section} */}
      <div className="restaurant-header">
        <h1 className="restaurant-name">{name}</h1>
        <div className="tabs">
          <span className="tab active">Order Online</span>
          <span className="tab">Dineout</span>
        </div>

        <div className="restaurant-info">
          <div className="info-left">
            <div className="rating-box">
              <span className="restaurant-rating">
               <i className="fa-solid fa-star"></i> {avgRating} ({totalRatingsString})
              </span>{" "}
              <span className="res-dot">•</span>
              <span className="restaurant-price">{costForTwoMessage}</span>
            </div>
          </div>

          <div className="info-right">
            <div className="restaurant-cuisines">{cuisines.join(", ")}</div>
            <div className="meta-info">
              <div className="outlet-area">
                <span className="outlet-label">Outlet</span>
                <span className="area-name">{areaName}</span>
              </div>
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
            <div key={index} className="menu-section">
              <h2 className="menu-section-title">{section.title}</h2>
              <div className="menu-list">
                {section.itemCards.map((item) => {
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
