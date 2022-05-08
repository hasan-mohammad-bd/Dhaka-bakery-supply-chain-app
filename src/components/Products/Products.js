import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useProducts from "../../hook/useProducts";
import Product from "../Product/Product";

const Products = ({ product }) => {
  const [products, setProducts] = useProducts();

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      const url = `https://stark-dusk-94643.herokuapp.com/product/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = products.filter((product) => product._id !== id);
          setProducts(remaining);
        });
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 container mx-auto">
      {products.map((product) => (
        <Product
          product={product}
          key={product._id}
          handleDelete={handleDelete}
        ></Product>
      ))}
    </div>
  );
};

export default Products;
