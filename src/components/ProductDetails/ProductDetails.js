import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProductDetailsCard from '../ProductDetailsCard/ProductDetailsCard';

const ProductDetails = () => {
    const {id} = useParams();
    console.log(id);
    const [product, setProduct] = useState({});
    const [quantities, setQuantities] = useState(0);
    console.log(quantities);

    useEffect(()=>{
        const url = `http://localhost:5000/product/${id}`;

        fetch(url)
        .then(res => res.json())
        .then(data => setProduct(data))
    },[])

    const handleUpdateQuantity = (event) => {
        event.preventDefault();
        const productQuantity = event.target.number.value;
        setQuantities(productQuantity)
        const updateQuantity = {productQuantity};
        const url = `http://localhost:5000/product/${id}`
    
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
              
          })
    
      }

      


      


    return (
        <div>
            <ProductDetailsCard product={product} quantities={quantities}  handleUpdateQuantity={handleUpdateQuantity} setQuantities={setQuantities}></ProductDetailsCard>
        </div>
    );
};

export default ProductDetails;