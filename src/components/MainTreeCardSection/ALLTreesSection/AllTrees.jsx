import React from "react";

const AllTrees = ({ plants }) => {
  console.log(plants);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {plants.map((tree) => (
        <div key={tree.id} className="border p-3 rounded shadow">
          <h3 className="font-semibold">{tree.name}</h3>
          <p className="text-sm text-gray-500">{tree.category}</p>
        </div>
      ))}
    </div>
  );
};

export default AllTrees;
