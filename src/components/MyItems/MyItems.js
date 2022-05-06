import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import MyProduct from '../MyProduct/MyProduct';
import './MyItems.css';


const MyItems = () => {

    const [products, setProducts] = useState([]);
    const [user, loading, error] = useAuthState(auth);
    console.log(products);

    useEffect(()=>{
        const url = `http://localhost:5000/product/`;
        fetch(url)
        .then(res => res.json())
        .then(data => {
           const selectedData = data.filter(singleData => singleData.email === user.email)
           setProducts(selectedData)
        })
    },[user])

    return (
        <div>
            {products.map(product => <MyProduct product={product} key={product._id}></MyProduct>)}
        </div>
    );
};

export default MyItems;