import React, { useEffect, useState } from "react";

const ProductDetailsCard = ({ product, handleUpdateQuantity, handleProductDelivered }) => {
  const { _id, productName, description, productQuantity, productPicture } =
    product;
    const [quantity, setQuantity] = useState();

     useEffect(()=>{
      setQuantity(productQuantity)
     },[productQuantity])
  

  return (
    <div>
      <br />
      <br />
      <br />
      <form onSubmit={handleUpdateQuantity}>
        <input type="number" name="number" id="number" />
        <input type="submit" value="Update" />
      </form>
      <button onClick={handleProductDelivered}> Delivered</button>
      <h3>product name: {productName}</h3>
      <p>product description: {description}</p>
      <p>product quantity {quantity}</p>
      <img src={productPicture} alt="" />
    </div>
  );
};

export default ProductDetailsCard;
