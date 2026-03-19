import React, { Suspense, use, useEffect, useState } from "react";
import CategoryAllButton from "./CategoryAllButton/CategoryAllButton";
import AllTrees from "./ALLTreesSection/AllTrees";

const AllTreeCard = ({ allCategoriesButton }) => {
  const res = use(allCategoriesButton);
  const categoriesButtonData = res.categories;

  //   Trees
  const [plants, setPlants] = useState([]);
  const handlePlantsApiFetch = async () => {
    const res = await fetch("https://openapi.programming-hero.com/api/plants");
    const data = await res.json();
    // console.log(data.plants);
    setPlants(data.plants);
  };

  // page load and data show
  useEffect(() => {
    handlePlantsApiFetch();
  }, []);

  return (
    <div>
      <h1 className="font-semibold text-[clamp(1.5rem,2vw,1.875rem)] text-center">
        Choose Your <span className="text-green-400">Trees</span>
      </h1>

      {/* Plants */}
      <div className="grid grid-cols-12 gap-4">
        {/* category */}
        <div className="col-span-12 lg:col-span-2 bg-green-800/10 shadow-2xl backdrop-blur-lg space-y-2 ">
          <h3 className="font-semibold mb-3 text-xl">Categories</h3>

          <button
            className="bg-green-600/60 py-1 px-3 w-full text-left rounded-sm cursor-pointer"
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
