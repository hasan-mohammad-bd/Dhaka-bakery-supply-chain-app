import React from 'react';
import { NavLink } from 'react-router-dom';
import img from '../../img/logo.png'
import './Header.css'

const Header = () => {
    return (
        <div className='third-color-bg'>
           <div className='container mx-auto py-7 flex justify-between items-center'>
               <div className="logo-holder w-36">
                   <img className='w-full' src={img} alt="" />
               </div>
               <nav>
                   <NavLink to='/'>Home</NavLink>
                   <NavLink to='myinventory'>My Inventory</NavLink>
                   <NavLink to='additems'>Add Items</NavLink>
                   <NavLink to='manageInventory'>Manage Inventory</NavLink>
                   <NavLink to='login'>Login</NavLink>                 
               </nav>
           </div>
        </div>
    );
};

export default Header;