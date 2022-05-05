import React from "react";

const ProductDetailsCard = ({ product }) => {
  const { _id, productName, description, productQuantity, productPicture } =
    product;
  return (
    <div>
      <h3>product name: {productName}</h3>
      <p>product description: {description}</p>
      <p>product quantity {productQuantity}</p>
      <img src={productPicture} alt="" />
    </div>
  );
};

export default ProductDetailsCard;
