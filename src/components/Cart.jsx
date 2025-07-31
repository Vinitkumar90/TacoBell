import { useDispatch, useSelector } from "react-redux";
import MenuItem from "./MenuItem";
import { clearCart } from "../store/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const deleteAllItems = () => {
    dispatch(clearCart());
  };

  return (
    <div className="w-4xl m-auto">
      <div className="font-bold font-mono text-center mb-2 py-3 text-2xl ">
        Taco Bell's Cart <span className="text-3xl">🛒</span>
      </div>

      {cartItems.length == 0 ? (
        <h1 className="text-center">sorry your cart is empty 🥲</h1>
      ) : (
        cartItems.map((item, index) => <MenuItem key={index} item={item} show={false} />)
      )}

      <div className="text-center m-2">
        <button
          className="px-4 py-2 bg-red-200 text-red-600 rounded-2xl font-semibold"
          onClick={deleteAllItems}
        >
          clear all items
        </button>
      </div>
    </div>
  );
};

export default Cart;
