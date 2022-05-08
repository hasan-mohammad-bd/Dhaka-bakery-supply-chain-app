import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MyProduct.css';

const MyProduct = ({product, handleDelete}) => {
    const navigate = useNavigate();
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
      <div className="m-4 flex flex-col justify-between card">
        <div className="img-holder-card">
          <img className="w-3/4 mx-auto" src={productPicture} alt="" />
        </div>
        <div className="p-5">
          <div className="flex justify-between py-3">
          <h4 className="font-semibold text-2xl secondary-color-text">{productName}</h4>
          <h4><span className="text-2xl font-bold secondary-color-text">$ {productPrice}</span></h4>
          </div>
          <p className="my-3"> {description}</p>
          <p><span className="font-semibold"> Quantity: </span>{productQuantity} pcs</p>
          <p><span className="font-semibold"> Supplier Name: </span> {supplier}</p>
  
        </div>
        <div className="flex justify-around p-3">
        <button
        className="btn3 btn4 text-center m-2 w-2/4"
          onClick={() => {
            navigate(`/inventory/${_id}`);
          }}
        >Update</button>
      <button
        className="btn3 btn4 text-center m-2 w-2/4"
          onClick={()=>{handleDelete(_id)}}
        >Delete</button>
        </div>
      </div>
    );
  };

export default MyProduct;