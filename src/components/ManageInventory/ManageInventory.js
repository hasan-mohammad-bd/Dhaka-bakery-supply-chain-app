import React, { useEffect, useState } from 'react';
import './ManageInventory.css'
import Product from '../../components/Product/Product'


const ManageInventory = () => {
    const [products, setProducts] = useState([])
    console.log(products);

    useEffect(()=>{
        fetch("http://localhost:5000/product")
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div>
            {
                products.map(product => <Product product={product}></Product>)
            }
        </div>
    );
};

export default ManageInventory;