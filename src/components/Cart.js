import { useDispatch, useSelector } from "react-redux";
import { addItems, clearCart, removeItem } from "../store/cartSlice";
import { CDN_URL } from "../utils/constants";
const Cart = () => {
  const { items: cartItems, restaurant } = useSelector((store) => store.cart);

  const dispatch = useDispatch();

  const itemTotal = (cartItems || []).reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const deliveryFee = 17;
  const totalAmount = itemTotal + deliveryFee;

  return (
    <div className="max-w-7xl mx-auto py-6 px-10">
      <h1 className="font-bold text-2xl mb-6"> Secure CheckOut</h1>
      <div className="grid md:grid-cols-2 gap-8">
        {/* Left Section */}
        <div className="w-10/12 space-y-6">
          <div className="border py-6 px-10 rounded">
            <h2 className="text-lg font-semibold ">Accounts</h2>
            <p className="text-gray-600 text-md pb-6">
              To place your order now, log in to your existing account or sign
              up.
            </p>

            <div className="flex space-x-4">
              <button className="border border-green-600 px-10 py-2 rounded font-semibold">
                LOG IN
              </button>
              <button className="bg-green-600 text-white px-10 py-2 rounded font-semibold">
                SIGN UP
              </button>
            </div>
          </div>

          <div className="border py-6 px-10 rounded">
            <h2 className="font-semibold text-lg text-gray-600">
              Delivery Address{" "}
            </h2>
          </div>
          <div className="border py-6 px-10 rounded">
            <h2 className="font-semibold text-lg text-gray-600">Payment</h2>
          </div>
        </div>

        {/* Right Section */}
        <div className="border p-4 rounded h-fit">
          <div className="mx-5 ">
            {restaurant && (
              <div className="flex mb-6 pb-4">
                <img
                  src={CDN_URL + restaurant?.image}
                  alt={restaurant?.name}
                  className="w-14 h-14 object-cover"
                />
                <h2 className="text-xl font-bold py-1 px-3 ">{restaurant?.name}</h2>
                
                
              </div>
            )}
            <div className=""></div>
          </div>

          {cartItems.length === 0 ? (
            <p className="text-gray-600 ">Your Cart is empty!</p>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-start border-b py-2"
              >
                <div>
                  <p className="font-semibold">{item.name}</p>
                </div>
                <div className="flex flex-col items-end">
                  <div className="flex items-center border border-green-600 rounded px-2 py-1">
                    <button
                      onClick={() => dispatch(removeItem(item.id))}
                      className="px-2 font-bold"
                    >
                      -
                    </button>
                    <span className="px-2">{item.quantity}</span>
                    <button
                      className="px-2 font-bold"
                      onClick={() => dispatch(addItems(item))}
                    >
                      +
                    </button>
                  </div>
                  <p className="mt-1 font-meidum">
                    ₹{item.price * item.quantity}
                  </p>
                </div>
              </div>
            ))
          )}
          {/* No-contact Delivery Option */}
          <div className="mt-4 stext-sm border border-1 border-gray-400 py-3 px-7 w-96">
            <input type="checkbox" className="mr-2" />
            <span className="text-gray-700">
              Opt in for<b> No-Contact Delivery</b>
              <br /> Partner will safely place the order outside the door.
            </span>
          </div>

          {/* Bill Summery */}
          <div className="mt-4 pt-4 text-sm">
            <p className="text-gray-600">Item Total: ₹{itemTotal}</p>
            <p className="text-gray-600">Delivery Fee: ₹{deliveryFee}</p>
            <p className="font-bold text-lg mt-2">To Pay: ₹{totalAmount}</p>
            <button
              className="mt-2 px-4 py-2 bg-black text-white rounded"
              onClick={() => dispatch(clearCart())}
            >
              Clear Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
