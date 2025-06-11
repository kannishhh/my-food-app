import { useContext, useState } from "react";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const { loggedInUser } = useContext(UserContext);

  // Subscribing to the store using a Selector
  const cartItems = useSelector((state) =>
    state.cart.items.reduce((total, item) => total + item.quantity, 0)
  );
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md py-3">
      <div className="max-w-7xl mx-auto flex px-4 py-3 justify-between items-center ">
        <Link to="/" className="flex items-center gap-2">
          <img
            className="w-12 h-12 object-cover rounded-full "
            src="/food.png"
            alt="logo"
          />
          <span className="text-xl font-bold text-green-600">FoodZone</span>
        </Link>

        <ul className="hidden md:flex text-gray-700 font-medium items-center justify-between gap-6 ">
          <li>
            <Link to="/" className="hover:text-green-600 transition">
              <i className="fa-solid fa-home mr-1"></i>Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-green-600 transition">
              <i className="fa-solid fa-address-card mr-1"></i>About Us
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-green-600 transition">
              <i className="fa-solid fa-contact-book mr-1"></i>Contact Us
            </Link>
          </li>
          <li>
            <Link to="/grocery" className="hover:text-green-600 transition">
              <i className="fa-solid fa-contact-book mr-1"></i>Grocery
            </Link>
          </li>
          <li>
            <Link to="/cart" className="hover:text-green-600 transition">
              <i className="fa-solid fa-cart-shopping mr-1"></i>Cart (
              {cartItems} items)
            </Link>
          </li>
        </ul>

        <div className="flex justify-between">
          <button
            className="flex items-center bg-green-500 text-white rounded-full px-3 py-1.5 hover:bg-green-600 transition"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
            <i className="fa-solid fa-right-to-bracket ml-2"></i>
          </button>
          <div className="flex text-center">
            <i className="fa-regular fa-user py-3 pl-3 text-lg"></i>
            <li className="text-md font-semibold list-none py-2 pl-1 text-red-700">
              {loggedInUser}
            </li>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
