import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProductDetailsCard from "../ProductDetailsCard/ProductDetailsCard";

const ProductDetails = () => {
  const { id } = useParams();

  const [product, setProduct] = useState({});

  useEffect(() => {
    const url = `https://dhaka-bakery-server-side-production.up.railway.app/product/${id}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  return (
    <div>
      <ProductDetailsCard
        product={product}
        key={product._id}
      ></ProductDetailsCard>
    </div>
  );
};

export default ProductDetails;
