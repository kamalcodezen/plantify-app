import React from "react";

const AllTrees = ({ plants, handleClickAddToCart }) => {
  // console.log(plants);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {plants.map((tree) => (
        <div
          className="relative group rounded-2xl p-[2px] bg-gradient-to-r from-green-400 via-emerald-500 to-lime-400 "
          key={tree.id}
        >
          {/* Inner Card */}
          <div className="bg-black/90 backdrop-blur-xl rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(34,197,94,0.6)] transition duration-500 group-hover:scale-[1.03]">
            {/* Image */}
            <div className="h-48 overflow-hidden relative">
              <img
                src={tree.image}
                alt={tree.name}
                className="w-full h-full object-cover group-hover:scale-125 transition duration-700"
              />

              {/* Neon Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            </div>

            {/* Content */}
            <div className="p-4 space-y-2 text-white">
              <h3 className="text-lg font-bold tracking-wide">{tree.name}</h3>

              <p className="text-sm text-gray-300">{tree.category}</p>

              {/* Price + Button */}
              <div className="flex flex-wrap justify-between items-center mt-3">
                <span className="text-green-400 font-bold text-xl drop-shadow-[0_0_10px_rgba(34,197,94,0.8)]">
                  ${tree.price}
                </span>

                <button
                  onClick={() =>
                    handleClickAddToCart(
                      tree.id,
                      tree.price,
                      tree.name,
                      tree.image,
                    )
                  }
                  className="px-4 py-1.5 rounded-full bg-green-500 text-black font-semibold hover:bg-green-400 transition shadow-[0_0_15px_rgba(34,197,94,0.8)] cursor-pointer"
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllTrees;
