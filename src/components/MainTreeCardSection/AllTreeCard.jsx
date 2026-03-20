import React, { Suspense, use, useEffect, useState } from "react";
import CategoryAllButton from "./CategoryAllButton/CategoryAllButton";
import AllTrees from "./ALLTreesSection/AllTrees";
import CategoriesButtonTreeCard from "./ALLTreesSection/CategoriesButtonTreeCard";
import AddToCart from "./AddToCartSection/AddToCart";

const AllTreeCard = ({ allCategoriesButton }) => {
  const res = use(allCategoriesButton);
  const categoriesButtonData = res.categories;
  const [activeCategory, setActiveCategory] = useState("all");
  const [loading, setLoading] = useState(false);

  //   AllTrees Button APi fetch
  const [plants, setPlants] = useState([]);
  const handlePlantsApiFetch = () => {
    setLoading(true);
    setActiveCategory("all");

    fetch("https://openapi.programming-hero.com/api/plants")
      .then((res) => res.json())
      .then((data) => {
        setPlants(data.plants);
        setLoading(false);
      });
  };

  // individual category button click and api fetch
  const [categoriesPLant, setCategoriesPlants] = useState([]);
  const onCategoryClick = (id) => {
    setLoading(true);
    setActiveCategory(id);

    fetch(`https://openapi.programming-hero.com/api/category/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCategoriesPlants(data.plants);
        setLoading(false);
      });
  };

  // Add to Cart
  const [addCart, setAddCart] = useState([]);
  const handleClickAddToCart = (id, price, name, image) => {
    const isExits = addCart.find((item) => item.id == id);
    if (isExits) {
      const updateQuantity = addCart.map((item) =>
        item.id == id ? { ...item, quantity: item.quantity + 1 } : item,
      );
      setAddCart(updateQuantity);
    } else {
      setAddCart([...addCart, { id, price, name, image, quantity: 1 }]);
    }
  };

  // all total price
  const total = addCart.reduce((sum, item) => {
    return sum + Number(item.price) * item.quantity;
  }, 0);

  // ALl trees page load and data show
  useEffect(() => {
    handlePlantsApiFetch();
  }, []);

  return (
    <div>
      <h1 className="font-semibold text-[clamp(1.5rem,2vw,1.875rem)] text-center mb-6">
        Choose Your <span className="text-green-400">Trees</span>
      </h1>

      {/* Plants */}
      <div className="grid grid-cols-12 gap-4">
        {/* category Button*/}
        <div className="col-span-12 lg:col-span-2  shadow-2xl backdrop-blur-lg space-y-2 ">
          <h3 className="font-semibold mb-3 text-xl">Categories</h3>
          <button
            className="bg-gradient-to-r from-green-400/70 via-emerald-500/90 to-lime-400/60  py-1 px-3 w-full text-left rounded-sm shadow-[0_0_30px_rgba(34,197,94,0.6)] text-black font-semibold hover:bg-green-400 hover:text-white cursor-pointer transition "
            onClick={handlePlantsApiFetch}
          >
            All Trees
          </button>
          {categoriesButtonData.map((button) => (
            <CategoryAllButton
              key={button.id}
              button={button}
              onCategoryClick={onCategoryClick}
            ></CategoryAllButton>
          ))}
        </div>

        {/* All trees & Category Trees & loading section */}
        <div className="col-span-12 lg:col-span-7">
          {loading ? (
            <div className="flex justify-center items-center h-40">
              <div className="w-12 h-12 border-4 border-green-400 border-t-transparent rounded-full animate-spin shadow-[0_0_20px_rgba(34,197,94,0.8)]"></div>
            </div>
          ) : activeCategory === "all" ? (
            <AllTrees
              plants={plants}
              handleClickAddToCart={handleClickAddToCart}
            ></AllTrees>
          ) : (
            <CategoriesButtonTreeCard
              categoriesPLant={categoriesPLant}
            ></CategoriesButtonTreeCard>
          )}
        </div>

        {/* cart section */}
        <div className="col-span-12 lg:col-span-3 ">
          {addCart.length === 0 ? (
            <div className="relative rounded-2xl p-[2px]  bg-gradient-to-r from-green-400 via-emerald-500 to-lime-400">
              {/* Inner */}
              <div className="bg-black/90 backdrop-blur-xl rounded-2xl p-6 text-center shadow-[0_0_30px_rgba(34,197,94,0.6)]">
                <h2 className="text-xl font-bold text-white mb-2">
                  🛒 Your Cart is Empty
                </h2>

                <p className="text-gray-400 text-sm">
                  Add some beautiful trees to your cart 🌿
                </p>

                {/* Button */}
                <button className="mt-4 px-4 py-2 rounded-full bg-green-500 text-black font-semibold hover:bg-green-400 transition shadow-[0_0_15px_rgba(34,197,94,0.8)]">
                  Explore Trees
                </button>
              </div>
            </div>
          ) : (
            <AddToCart addCart={addCart}></AddToCart>
          )}

          <div className="rounded-2xl p-[2px]  bg-gradient-to-r from-green-400 via-emerald-500 to-lime-400">
            <div className=" bg-black/90 backdrop-blur-xl rounded-2xl p-6 text-center shadow-[0_0_30px_rgba(34,197,94,0.6)] flex justify-between items-center  text-white">
              <span className=" text-2xl font-bold">Total :</span>
              <span className="text-green-400 text-2xl font-bold">
                ${total}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllTreeCard;
