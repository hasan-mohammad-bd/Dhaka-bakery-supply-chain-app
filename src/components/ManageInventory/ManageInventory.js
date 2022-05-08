import React from "react";
import Products from "../Products/Products";

const ManageInventory = () => {
  return (
    <div>
      <h1 className="text-center font-normal third-color-text text-4xl md:text-5xl mt-8 mt-10">
        Manage All Inventory
      </h1>
      <Products></Products>
    </div>
  );
};

export default ManageInventory;
