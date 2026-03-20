import React, { Suspense, use, useEffect, useState } from "react";
import CategoryAllButton from "./CategoryAllButton/CategoryAllButton";
import AllTrees from "./ALLTreesSection/AllTrees";
import CategoriesButtonTreeCard from "./ALLTreesSection/CategoriesButtonTreeCard";
import AddToCart from "./AddToCartSection/AddToCart";
import toast, { Toaster } from "react-hot-toast";
import "./AllTreeCard.css";

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
    const isExits = addCart.find((item) => item.id === id);

    if (isExits) {
      const updateQuantity = addCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      );
      setAddCart(updateQuantity);
    } else {
      setAddCart([...addCart, { id, price, name, image, quantity: 1 }]);
    }

    toast.custom(
      (t) => (
        <div
          className={`relative flex items-center gap-4 p-3 rounded-xl 
        bg-gradient-to-br from-green-900/40 to-black border border-green-400/40
        shadow-[0_0_25px_rgba(34,197,94,0.4)] backdrop-blur-xl
        ${t.visible ? "animate-enter" : "animate-leave"}`}
        >
          {/* Image */}
          <img
            src={image}
            className="w-12 h-12 rounded-lg object-cover border border-green-400/30"
          />

          {/* Text */}
          <div className="flex flex-col">
            <span className="text-green-400 font-semibold text-sm">
              Added to Cart
            </span>
            <span className="text-gray-300 text-xs">{name}</span>
          </div>

          {/* Price */}
          <div className="ml-auto text-green-400 font-bold text-sm">
            ${price}
          </div>

          {/* Glow */}
          <div className="absolute inset-0 bg-green-500/10 blur-xl opacity-30"></div>

          {/* Progress */}
          <div className="absolute bottom-0 left-0 h-[2px] w-full bg-green-400 toast-progress"></div>
        </div>
      ),
      { duration: 2000 },
    );
  };

  // remove cart item
  const handleRemoveCart = (id) => {
    const removeItem = addCart.find((item) => item.id === id);
    const updatedCart = addCart.filter((item) => item.id !== id);
    setAddCart(updatedCart);

    const toastId = toast.custom(
      (t) => (
        <div
          className={`relative flex items-center gap-4 p-3 rounded-xl 
        bg-gradient-to-br from-red-900/40 to-black border border-red-400/40
        shadow-[0_0_25px_rgba(248,113,113,0.4)] backdrop-blur-xl
        ${t.visible ? "animate-enter" : "animate-leave"}`}
        >
          {/* Image */}
          <img
            src={removeItem?.image}
            className="w-12 h-12 rounded-lg border border-red-400/30"
          />

          {/* Text */}
          <div className="flex flex-col">
            <span className="text-red-400 font-semibold text-sm">
              Item Removed
            </span>
            <span className="text-gray-400 text-xs">Removed from cart</span>
          </div>

          {/*  UNDO BUTTON */}
          <button
            onClick={() => {
              setAddCart((item) => [...item, removeItem]);
              toast.dismiss(t.id);
            }}
            className="ml-auto text-xs bg-red-400 text-black px-2 py-1 rounded hover:bg-red-300"
          >
            Undo
          </button>

          {/* Progress */}
          <div className="absolute bottom-0 left-0 h-[2px] w-full bg-red-400 toast-progress"></div>
        </div>
      ),
      { duration: 3000 },
    );
  };

  // all total price
  const total = addCart.reduce((sum, item) => {
    return sum + Number(item.price) * item.quantity;
  }, 0);

  // text animation useEffect
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    });

    elements.forEach((el) => observer.observe(el));
  }, []);

  // ALl trees page load and data show
  useEffect(() => {
    handlePlantsApiFetch();
  }, []);

  return (
    <div className="relative">
      <Toaster position="top-right" />

      {/* Heading */}
      <h1 className="reveal text-3xl font-bold text-center  md:text-4xl  leading-tight ">
        Choose Your{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-lime-400">
          Trees
        </span>
      </h1>
      <p className="reveal text-center mb-5">Grow a better future </p>

      {/* Plants */}
      <div className="grid grid-cols-12 gap-4">

        {/* category Button*/}
        <div className="col-span-12 lg:col-span-2 order-1 lg:order-none shadow-2xl backdrop-blur-lg space-y-2 ">
          <h3 className="font-semibold mb-3 text-xl">Categories</h3>

          {/* MOBILE DROPDOWN (design change hobe na) */}
          <div className="lg:hidden mb-2">
            <select
              value={activeCategory}
              onChange={(e) => onCategoryClick(e.target.value)}
              className="w-full p-2 rounded border border-green-400 bg-black text-white bg-gradient-to-r from-green-400/70 via-emerald-500/90 to-lime-400/60  px-3 rounded-sm shadow-[0_0_30px_rgba(34,197,94,0.6)] text-black font-semibold hover:bg-green-400 hover:text-white cursor-pointer transition"
            >
              <option value="all">All Trees</option>

              {categoriesButtonData.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.category_name}
                </option>
              ))}
            </select>
          </div>
          {/* all button asche api theke */}
          <button
            className={`hidden lg:block bg-gradient-to-r from-green-400/70 via-emerald-500/90 to-lime-400/60  py-1 px-3 w-full text-left rounded-sm shadow-[0_0_30px_rgba(34,197,94,0.6)] text-black font-semibold hover:bg-green-400 hover:text-white cursor-pointer transition ${
              activeCategory === "all"
                ? "bg-green-200 text-white scale-103 border border-green-400 "
                : "text-black-300"
            }`}
            onClick={handlePlantsApiFetch}
          >
            All Trees
          </button>
          {categoriesButtonData.map((button) => (
            <CategoryAllButton
              key={button.id}
              button={button}
              onCategoryClick={onCategoryClick}
              activeCategory={activeCategory}
            ></CategoryAllButton>
          ))}
        </div>

        {/* All trees & Category Trees & loading section  and render*/}
        <div className=" col-span-12 lg:col-span-7 order-3 lg:order-none">
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
              handleClickAddToCart={handleClickAddToCart}
            ></CategoriesButtonTreeCard>
          )}
        </div>

        {/* cart section */}
        <div className="col-span-12 lg:col-span-3 order-2 lg:order-none">
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
                <button className="mt-4 px-4 py-2 rounded-full bg-green-500 text-black font-semibold hover:bg-green-400 transition shadow-[0_0_15px_rgba(34,197,94,0.8)] cursor-pointer">
                  Explore Trees
                </button>
              </div>
            </div>
          ) : (
            <AddToCart
              addCart={addCart}
              handleRemoveCart={handleRemoveCart}
            ></AddToCart>
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

      {/*  Floating particles  Background er jonno*/}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <span
            key={i}
            className="absolute w-1 h-1 bg-green-400 rounded-full opacity-70 blur-[1px]"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default AllTreeCard;
