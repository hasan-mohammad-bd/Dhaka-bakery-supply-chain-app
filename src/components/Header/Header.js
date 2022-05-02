import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import img from "../../img/logo.png";
import "./Header.css";
import { RiMenu3Fill } from "@react-icons/all-files/ri/RiMenu3Fill";
import { AiOutlineCloseSquare } from "@react-icons/all-files/ai/AiOutlineCloseSquare";

const Header = () => {
    const [menu, setMenu] = useState(false);


    const menuSweeper = () => {
        setMenu(!menu)

    }
  return (
    <div className="third-color-bg navbar-full">
      <div className="container mx-auto py-7 flex justify-between items-center relative">
        <div className="logo-holder w-36">
          <img className="w-full" src={img} alt="" />
        </div>
        <div>
          <nav className={`lg-flex flex-col lg:flex-row absolute lg:static ${menu ? 'top-20': 'top-[-250px]'}`}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/blogs">Blog</NavLink>
            <NavLink to="myinventory">My Inventory</NavLink>
            <NavLink to="additems">Add Items</NavLink>
            <NavLink to="manageInventory">Manage Inventory</NavLink>
            <NavLink to="login">Login</NavLink>
          </nav>
          <div>
              {menu ? <AiOutlineCloseSquare onClick={menuSweeper} className="menu-bar lg:hidden mr-4"/> :
            <RiMenu3Fill onClick={menuSweeper} className="menu-bar lg:hidden mr-4"/>}

          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
