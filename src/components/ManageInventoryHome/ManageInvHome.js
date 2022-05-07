import React from 'react';
import Products from '../Products/Products';

const ManageInvHome = () => {
    return (
        <div>
            <h1 className='text-center font-normal third-color-text text-4xl md:text-6xl'>Our Inventory</h1>
            <Products></Products>
        </div>
    );
};

export default ManageInvHome;