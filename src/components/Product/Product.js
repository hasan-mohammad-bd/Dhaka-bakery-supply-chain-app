import React from "react";
import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {
    const navigate = useNavigate()
  const {
    _id,
    productName,
    description,
    productQuantity,
    supplier,
    productPrice,
    productPicture,
  } = product;
  return (
    <div>
      <p>name:{productName}</p>
      <p>description: {description}</p>
      <p>quantity: {productQuantity}</p>
      <p>supplier: {supplier}</p>
      <p>Price: {productPrice}</p>
      <p>supplier: {supplier}</p>
      <p>price: {productPrice}</p>
      <img src={productPicture} alt="" />
      <button onClick={()=>{navigate(`/inventory/${_id}`)}}>Product details</button>
    </div>
  );
};

export default Product;
