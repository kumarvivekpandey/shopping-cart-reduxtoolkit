import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
 import { Link } from "react-router-dom";
import { removeFromCart } from "../store/slices/cart-slice";
export default function Cart() {

    const dispatch = useDispatch ();
    function handleRemoveFromCart(cartItem){
        dispatch(removeFromCart(cartItem.id))
    }
  const [totalCart, setTotalCart] = useState(0);

  const { cart } = useSelector((state) => state);

  useEffect(() => {
    const totalPrice = cart.reduce((acc, curr) => {
      // Check if curr.price is a valid number
      if (!isNaN(curr.price) && typeof curr.price === "number") {
        return acc + curr.price;
      }
      // If not a valid number, return acc unchanged
      return acc;
    }, 0);
    setTotalCart(totalPrice);
  }, [cart]);

  console.log(cart, totalCart);

  return (
    <div className="flex justify-center">
      {cart && cart.length ? (
        <>
          <div className="min-h-[80vh] grid md:grid-cols-2 max-w-6xl mx-auto">
            <div className="flex flex-col justify-center items-center p-3">
              {cart.map((cartItem) => (
              <div key={ cartItem.id}>
               <div className="flex items-center p-5 justify-between bg-red-500 mt-2 mb-2 rounded-xl">
        <div className="flex p-3">
          <img
            src={cartItem?.image}
            className="h-28 rounded-lg"
            alt={cartItem?.title}
          />
          <div className="ml-10 self-start space-y-5">
            <h1 className="text-xl text-white font-bold">{cartItem?.tile}</h1>
            <p className="text-white font-extrabold">{cartItem?.price}</p>
          </div>
        </div>
        <div>
          <button
           onClick={() => handleRemoveFromCart(cartItem)}
            className="bg-red-950 text-white border-2 rounded-lg font-bold p-4"
          >
            Remove From cart
          </button>
        </div>
      </div>

              </div>
              ))}
            </div>
          </div>
          <div className="w-[300px]">
            <div className="flex flex-col justify-center items-end p-5 space-y-5 mt-14">
              <h1 className="font-bold text-lg text-red-800">
                Your Cart Summary
              </h1>
              <p>
                <span className="text-gray-800 font-bold">Total Item</span>
                <span>: {cart.length}</span>
              </p>
              <p>
                <span className="text-gray-800 font-bold">Total Amount</span>
                <span>: {totalCart}</span>
              </p>
            </div>
          </div>
        </>
      ) : (
        <div className="min-h-[80vh] flex flex-col items-center justify-center">
          <h1 className="text-gray-800 font-bold text-xl mb-2">
            Your cart is empty
          </h1>
          <Link to="/">
            <button className="bg-red-950 text-white border-2 rounded-lg font-bold p-4">
              SHOP NOW
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}
