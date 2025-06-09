import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";
import { SWIGGY_API } from "../utils/constants";
// import {useContext} from "react";
// import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  // const [setOffset] = useState([null]);
  // const [setUuid] = useState([null]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(SWIGGY_API);
    const json = await data.json();

    const restaurant =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    // const restaurantsCards =
    //   restaurant?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

    // const nextOffset = json?.data?.pageOffset?.nextOffset || null;
    // const restaurantUuids =
    //   restaurantsCards?.card?.card?.gridElements?.infoWithStyle
    //     ?.restaurantUuids || [];

    setListOfRestaurant(restaurant);
    setFilteredRestaurant(restaurant);
    // setOffset(nextOffset);
    // setUuid(restaurantUuids);
  };

  // const { loggedInUser, setUserName } = useContext(UserContext);

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="flex flex-col items-center bg-gray-50 min-h-screen pt-5">
      {/* Search and Filters */}
      <div className="w-full max-w-7xl px-4 sticky top-[95px] z-40 bg-gray-50 py-4 shadow-sm">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Search Bar */}
          <div className="flex w-full sm:w-auto gap-2 items-center">
            <input
              type="search"
              className="w-full sm:w-96 h-10 px-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 shadow-sm"
              placeholder="Search for restaurants and food"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />

            <button
              className="p-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors duration-300"
              onClick={() => {
                const filtered = listOfRestaurant.filter((res) =>
                  res.info.name.toLowerCase().includes(searchText.toLowerCase())
                );
                setFilteredRestaurant(filtered);
              }}
            >
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>

          {/* <label className="text-lg px-2">
            UserName : 
            <input
              type="search"
              className="border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 shadow-sm"
              value={loggedInUser}
              onChange={(e) => setUserName(e.target.value)}
            ></input>
          </label> */}

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
            <button
              className="px-4 py-2 border border-gray-300 rounded-full bg-white hover:bg-blue-100 transition"
              onClick={() => {
                const topRated = listOfRestaurant.filter(
                  (res) => res.info.avgRating > 4.2
                );
                setFilteredRestaurant(topRated);
              }}
            >
              Top Rated Restaurants
            </button>
            <button
              className="px-4 py-2 border border-gray-300 rounded-full bg-white hover:bg-blue-100 transition"
              onClick={() => setFilteredRestaurant(listOfRestaurant)}
            >
              Show All
            </button>
          </div>
        </div>
      </div>

      {/* Restaurant Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 w-full max-w-7xl">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant?.info?.id}
            to={"/restaurant/" + restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
