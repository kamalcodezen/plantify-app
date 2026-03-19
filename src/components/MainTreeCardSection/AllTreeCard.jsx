import React, { Suspense, use, useEffect, useState } from "react";
import CategoryAllButton from "./CategoryAllButton/CategoryAllButton";
import AllTrees from "./ALLTreesSection/AllTrees";

const AllTreeCard = ({ allCategoriesButton }) => {
  const res = use(allCategoriesButton);
  const categoriesButtonData = res.categories;

  //   AllTrees Button APi fetch
  const [plants, setPlants] = useState([]);
  const handlePlantsApiFetch = () => {
    fetch("https://openapi.programming-hero.com/api/plants")
      .then((res) => res.json())
      .then((data) => setPlants(data.plants));
    // console.log(data.plants);
  };

  // page load and data show
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
        {/* category */}
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
            ></CategoryAllButton>
          ))}
        </div>


        {/* Trees */}
        <div className="col-span-12 lg:col-span-8">
          <AllTrees plants={plants}></AllTrees>
        </div>


        {/* cart section */}
        <div className="col-span-12 lg:col-span-2">
          <p>CArt</p>
        </div>


      </div>
      {/* {handlePlantsApiFetch()} */}
    </div>
  );
};

export default AllTreeCard;
