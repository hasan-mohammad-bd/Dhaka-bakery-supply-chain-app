import React from "react";

const Product = ({ product }) => {
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
    </div>
  );
};

export default Product;
