import React, { useEffect, useState } from "react";

const ProductDetailsCard = ({ product, handleUpdateQuantity, quantities,setQuantities }) => {
  const { _id, productName, description, productQuantity, productPicture,  } =
    product;

    const [delivered, setDelivered] = useState(0)

    const handleDelivered = () =>{
      setDelivered(delivered-1)
       const updateQuantity = {delivered};
       const url = `http://localhost:5000/product/${_id}`
   
         fetch(url, {
           method: 'PUT',
           headers: {
             'content-type':'application/json'
           },
           body: JSON.stringify(updateQuantity)
         })
         .then(res => res.json())
         .then(data => {
            
             
         })
     }

  return (
    <div>
      <form onSubmit={handleUpdateQuantity}>
        <input type="number" name="number" id="number" required/>
        <input type="submit" value="Update" />
      </form>
      <button onClick={handleDelivered}> Delivered</button>
      <h3>product name: {productName}</h3>
      <p>product description: {description}</p>
      {quantities? <p>product quantity: {quantities}</p> : <p>product quantity: {productQuantity}</p>}
      
      <img src={productPicture} alt="" />
    </div>
  );
};

export default ProductDetailsCard;
