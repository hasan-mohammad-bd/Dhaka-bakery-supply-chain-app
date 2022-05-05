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

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?')
        if(proceed){
            const url = `http://localhost:5000/product/${id}`;
            fetch(url, {
                method: "DELETE"
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const remaining = products.filter(product => product._id !== id);
                setProducts(remaining);
            })
        }
    }

  return (
    <div>
      {products.map((product) => (
        <Product product={product} key={product._id} handleDelete={handleDelete}></Product>
      ))}
    </div>
  );
};

export default Products;
