import { CarTaxiFront, Trash } from "lucide-react";
import React from "react";

const AddToCart = ({ addCart,handleRemoveCart }) => {
  const addToCartData = addCart.map((cart) => {
    const axiosData = {
      id: cart.id,
      price: cart.price,
      name: cart.name,
      image: cart.image,
      quantity: cart.quantity,
    };
    return axiosData;
  });

  return (
    <div className="space-y-4">
      {addToCartData.map((cart, index) => (
        <div
          key={index}
          className="relative group rounded-2xl p-[2px] bg-gradient-to-r from-green-400 via-emerald-500 to-lime-400"
        >
          {/* Inner */}
          <div className="bg-black/90 backdrop-blur-xl rounded-2xl p-4 shadow-[0_0_30px_rgba(34,197,94,0.6)] transition duration-300 group-hover:scale-[1.02]">
            <div className="flex items-center gap-3">
              {/* Image */}
              <img
                src={cart.image}
                alt={cart.name}
                className="w-16 h-16 object-cover rounded-lg"
              />

              {/* Info */}
              <div className="flex-1 text-white">
                <h3 className="font-semibold">{cart.name}</h3>
               

                <p className="text-green-400 font-bold">${cart.price}</p>
              </div>

              {/* Quantity */}
              <div className="flex flex-col items-center text-white">
                <span className="text-xs">Qty</span>
                <span className="bg-green-500/20 px-2 rounded">
                  {cart.quantity}
                </span>
              </div>
            </div>

            {/* Bottom */}
            <div className="flex justify-between items-center mt-3 border-t border-gray-700 pt-2 text-white">
              <button onClick={()=>handleRemoveCart(cart.id)} className="text-red-400 text-sm hover:text-red-300 transition cursor-pointer">
                <Trash/>
              </button>

              <span className="text-green-400 font-bold">
                ${cart.price * cart.quantity}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AddToCart;
