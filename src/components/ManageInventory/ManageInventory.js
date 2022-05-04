import React, { useEffect, useState } from 'react';
import './ManageInventory.css'
import Product from '../../components/Product/Product'
import Products from '../Products/Products';


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
                products.map(product => <Products product={product} key={product._id}></Products>)
            }
        </div>
    );
};

export default ManageInventory;