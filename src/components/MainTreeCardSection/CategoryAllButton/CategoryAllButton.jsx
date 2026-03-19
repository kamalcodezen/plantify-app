import React from "react";

const CategoryAllButton = ({ button }) => {
  // console.log(button);
  return (
    <div >
      <button className="bg-green-600/60 py-1 px-3 w-full text-left rounded-sm cursor-pointer">{button.category_name}</button>
    </div>
  );
};

export default CategoryAllButton;
