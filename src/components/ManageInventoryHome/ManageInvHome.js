import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useProducts from "../../hook/useProducts";
import ProductHome from "../ProductHome/ProductHome";
import Products from "../Products/Products";

const ManageInvHome = () => {
  const [products, setProducts] = useProducts();
  console.log(products);
  const navigate = useNavigate()
  return (
    <div className="container mx-auto">
      <h1 className="text-center font-normal third-color-text text-4xl md:text-6xl">
        Our Inventory
      </h1>
      <p className="text-center py-8">We produce and store product according to our customer needs. </p>

      <div className="grid grid-cols-1 md:grid-cols-3">
        {products.slice(0,6).map((product) => (
          <ProductHome product={product} key={product._id}></ProductHome>
        ))}
      </div>
      <div className="flex justify-center my-8">
        <button onClick={()=>navigate("/manageInventory")} className="btn6">Manage All Inventory</button>
      </div>
    </div>
  );
};

export default ManageInvHome;
