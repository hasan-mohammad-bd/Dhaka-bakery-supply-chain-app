import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./ProductDetails.css";

const ProductDetailsCard = ({
  product
}) => {
  const {
    _id,
    productName,
    description,
    productQuantity,
    productPicture,
    productPrice,
    supplier,
  } = product;
  const navigate = useNavigate()



  const [delivered, setDelivered] = useState(0);
  const [quantities, setQuantities] = useState(0);


  const handleUpdateQuantity = (event) => {

    const productQuantityInput = Number(event.target.number.value) + Number(productQuantity)

    setQuantities(productQuantityInput)
    const updateQuantity = {productQuantityInput};
    const url = `https://dhaka-bakery-server-side-production.up.railway.app/product/${_id}`

      fetch(url, {
        method: 'PUT',
        headers: {
          'content-type':'application/json'
        },
        body: JSON.stringify(updateQuantity)
      })
      .then(res => res.json())
      .then(data => {
          toast.success('Quantity updated successfully')
          event.target.reset();
          window.location.reload(false);
          
      })

  }
  const handleDelivered = (event) => {
    const productQuantityInput = Number(productQuantity) -1

    setQuantities(productQuantityInput)
    const updateQuantity = {productQuantityInput};
    const url = `https://dhaka-bakery-server-side-production.up.railway.app/product/${_id}`

      fetch(url, {
        method: 'PUT',
        headers: {
          'content-type':'application/json'
        },
        body: JSON.stringify(updateQuantity)
      })
      .then(res => res.json())
      .then(data => {
          toast.success('Quantity updated successfully')
          window.location.reload(false);
          
      })

  }



  return (
    <div>
          <div className="flex md:flex-row flex-col justify-between items-center container mx-auto">
      <div className="w-2/4 img-holder-card m-5 md:m-20 p-5">
        <img className="w-full" src={productPicture} alt="" />
      </div>
      <div>
        <div className="p-5 md:w-[600px]">
          <div className="flex justify-between py-3 w-full">
            <h4 className="font-semibold text-2xl secondary-color-text">
              {productName}
            </h4>
            <h4>
              <span className="text-2xl font-bold secondary-color-text">
                Price: $ {productPrice}
              </span>
            </h4>
          </div>
          <p className="my-3"> {description}</p>
          {quantities ? (
            <p className="font-semibold">Product quantity: {quantities} pcs</p>
          ) : (
            <p className="font-semibold">
              Product quantity: {productQuantity} pcs
            </p>
          )}
          <p>
            <span className="font-semibold"> Supplier Name: </span> {supplier}
          </p>
          <p>
            <span className="font-semibold"> Product ID: </span> {_id}
          </p>
          {Number(productQuantity || quantities) <= 0 ? (
            <p className="p-2 my-3 bg-red-400 inline-block stock">Sold Out</p>
          ) : (
            <p className="p-2 my-3 bg-green-400 inline-block stock">In Stock</p>
          )}
          <form className="mt-10" onSubmit={handleUpdateQuantity}>
            <input
              className="p-2 w-2/4 input-quantity"
              type="number"
              name="number"
              id="number"
              required
            />
            <input className="btn5 p-10 ml-4" type="submit" value="Restock" />
          </form>

          {
            productQuantity <=0 ? <p className="text-red-400">Please restock the product</p> : <button className="btn5 mt-5 cursor-not-allowed" onClick={handleDelivered} > Delivered </button>
          }
        </div>
      </div>

    </div>
    <div className="flex justify-center">
    <button className="btn6" onClick={() => {navigate(-1)}}>Back</button>
    </div>
    </div>
  );
};

export default ProductDetailsCard;
