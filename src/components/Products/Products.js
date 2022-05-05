import React, { useEffect, useState } from "react";
import Product from "../Product/Product";

const Products = ({ product }) => {
  const [products, setProducts] = useState([]);
  console.log(products);

  useEffect(() => {
    fetch("http://localhost:5000/product")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      {products.map((product) => (
        <Product product={product} key={product._id}></Product>
      ))}
    </div>
  );
};

export default Products;
