import React from "react";

const CategoriesButtonTreeCard = ({
  categoriesPLant,
  handleClickAddToCart,
}) => {
  // console.log(categoriesPLant)
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {categoriesPLant.map((categoryTree) => (
        <div
          className="relative group rounded-2xl p-[2px] bg-gradient-to-r from-green-400 via-emerald-500 to-lime-400 "
          key={categoryTree.id}
        >
          {/* Inner Card */}
          <div className="bg-black/90 backdrop-blur-xl rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(34,197,94,0.6)] transition duration-500 group-hover:scale-[1.03]">
            {/* Image */}
            <div className="h-48 overflow-hidden relative">
              <img
                alt={categoryTree.name}
                src={categoryTree.image}
                className="w-full h-full object-cover group-hover:scale-125 transition duration-700"
              />

              {/* Neon Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            </div>

            {/* Content */}
            <div className="p-4 space-y-2 text-white">
              <h3 className="text-lg font-bold tracking-wide">
                {categoryTree.name}
              </h3>

              <p className="text-sm text-gray-300">{categoryTree.category}</p>

              {/* Price + Button */}
              <div className="flex justify-between items-center mt-3">
                <span className="text-green-400 font-bold text-xl drop-shadow-[0_0_10px_rgba(34,197,94,0.8)]">
                  ${categoryTree.price}
                </span>

                <button
                  onClick={() =>
                    handleClickAddToCart(
                      categoryTree.id,
                      categoryTree.price,
                      categoryTree.name,
                      categoryTree.image,
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

export default CategoriesButtonTreeCard;
