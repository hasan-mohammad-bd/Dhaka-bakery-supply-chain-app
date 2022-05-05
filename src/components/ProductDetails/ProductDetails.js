import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'
import ProductDetailsCard from '../ProductDetailsCard/ProductDetailsCard';

const ProductDetails = () => {
    const {id} = useParams();
    console.log(id);
    const [product, setProduct] = useState({});

    useEffect(()=>{
        const url = `http://localhost:5000/product/${id}`;

        fetch(url)
        .then(res => res.json())
        .then(data => setProduct(data))
    },[])

    return (
        <div>
            <ProductDetailsCard product={product}></ProductDetailsCard>
        </div>
    );
};

export default ProductDetails;