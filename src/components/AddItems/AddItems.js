import React from "react";
import './AddItems.css'
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from "../Loading/Loading";


const AddItems = () => {
    const [user, loading, error] = useAuthState(auth);


  const handleAddingInventory = (event) => {
      event.preventDefault()
    const product = {
        email: user.email,
        productName : event.target.productName.value,
        description : event.target.description.value,
        productQuantity : event.target.productQuantity.value,
        productPrice : event.target.productPrice.value,
        productPicture : event.target.productPicture.value,
        supplier : event.target.supplier.value
    }
    axios.post('https://dhaka-bakery-server-side-production.up.railway.app/product', product )
    .then(response =>{

        const {data} = response;
        if(data.insertedId){
            toast.success("Product has been added");
            event.target.reset();
        }
    })
  };

  return (
    <div className="addItems-cover flex justify-center items-center">
      <div className="form-control w-3/4 h-4/5 mx-auto">
        <div className="flex justify-center items-center w-full h-full">
          <form onSubmit={handleAddingInventory}>
            <input
              className="block m-3 p-3 w-3/4 md:w-[300px]"
              placeholder="Product Name"
              type="text"
              name="productName"
              id="productName"
              required
            />
            <input
              className="block m-3 p-3 w-3/4 md:w-[300px]"
              placeholder="Product Description"
              type="text"
              name="description"
              id="description"
              required
            />

            <input
              className="block m-3 p-3 w-3/4 md:w-[300px]"
              placeholder="Supplier Name"
              type="text"
              name="supplier"
              id="supplier"
              required
            />

            <input
              className="block m-3 p-3 w-3/4 md:w-[300px]"
              placeholder="Product Quantity"
              type="number"
              name="productQuantity"
              id="productQuantity"
              required
            />
            <input
              className="block m-3 p-3 w-3/4 md:w-[300px]"
              placeholder="Price"
              type="number"
              name="productPrice"
              id="productPrice"
              required
            />
            <input
              className="block m-3 p-3 w-3/4 md:w-[300px]"
              placeholder="Product Image URL"
              type="text"
              name="productPicture"
              id="productPicture"
              required
            />
            <input
              className="block btn2 m-3 p-3 w-3/4 md:w-[300px]"
              placeholder=""
              type="submit"
              value="Add Product"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddItems;
