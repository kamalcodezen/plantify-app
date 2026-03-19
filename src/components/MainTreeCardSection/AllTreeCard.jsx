import React, { use } from "react";
import CategoryAllButton from "./CategoryAllButton/CategoryAllButton";

const AllTreeCard = ({ allCategoriesButton }) => {
  const allCategoriesButtonRes = use(allCategoriesButton);
  const categoriesButtonData = allCategoriesButtonRes.categories;
  //   console.log(categoriesButtonData);

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

          <button className="bg-green-600/60 py-1 px-3 w-full text-left rounded-sm cursor-pointer">
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
          <p>tree</p>
        </div>
        {/* cart section */}
        <div className="col-span-12 lg:col-span-2">
          <p>CArt</p>
        </div>
      </div>
    </div>
  );
};

export default AllTreeCard;
