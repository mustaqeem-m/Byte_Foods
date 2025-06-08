import { useDispatch, useSelector } from "react-redux";
import { ItemList } from "./ItemList";
import { deleteCart } from "../utils/Slices/CartSlice.js";

const Cart = ({ items }) => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(deleteCart());
  };
  return (
    <div className="text-center p-5 w-8/12 m-auto">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-6">Cart</h1>

      <ItemList items={cartItems} className="w-6/12 m-auto border-b-2" />

      {cartItems.length !== 0 ? (
        <button
          className="mt-4 px-4 py-2 bg-red-400 text-white rounded hover:bg-red-700 transition cursor-pointer"
          onClick={handleClearCart}
        >
          🗑 Clear Cart
        </button>
      ) : (
        <h1 className="font-bold text-2xl">Your cart is empty , please add Items in your cart </h1>
      )}
    </div>
  );
};
export default Cart;
