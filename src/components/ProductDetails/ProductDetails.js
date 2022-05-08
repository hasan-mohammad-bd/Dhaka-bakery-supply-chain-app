import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProductDetailsCard from '../ProductDetailsCard/ProductDetailsCard';

const ProductDetails = () => {
    const {id} = useParams();
    console.log(id);
    const [product, setProduct] = useState({});


    useEffect(()=>{
        const url = `https://stark-dusk-94643.herokuapp.com/product/${id}`;

        fetch(url)
        .then(res => res.json())
        .then(data => setProduct(data))
    },[])

    return (
        <div>
            <ProductDetailsCard product={product} key={product._id}></ProductDetailsCard>
        </div>
    );
};

export default ProductDetails;