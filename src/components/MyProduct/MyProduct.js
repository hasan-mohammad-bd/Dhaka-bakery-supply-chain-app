import React from 'react';
import './MyProduct.css';

const MyProduct = ({product}) => {
    const {productName, productQuantity, productPrice} = product;
    return (
        <div>
           {productName}
           {productQuantity}
           {productPrice}
        </div>
    );
};

export default MyProduct;