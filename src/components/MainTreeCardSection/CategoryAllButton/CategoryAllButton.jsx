import React from "react";

const CategoryAllButton = ({ button,onCategoryClick }) => {
  // console.log(button);
  return (
    <div >
      <button onClick={()=>onCategoryClick(button.id)}  className="bg-gradient-to-r from-green-400/70 via-emerald-500/90 to-lime-400/60  py-1 px-3 w-full text-left rounded-sm shadow-[0_0_30px_rgba(34,197,94,0.6)] text-black font-semibold hover:bg-green-400 hover:text-white cursor-pointer transition">{button.category_name}</button>
    </div>
  );
};

export default CategoryAllButton;
