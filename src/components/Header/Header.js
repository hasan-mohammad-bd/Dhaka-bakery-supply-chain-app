import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import img from "../../img/logo.png";
import "./Header.css";
import { RiMenu3Fill } from "@react-icons/all-files/ri/RiMenu3Fill";
import { AiOutlineCloseSquare } from "@react-icons/all-files/ai/AiOutlineCloseSquare";
import auth from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";

const Header = () => {
    const [menu, setMenu] = useState(false);
    const [user, loading, error] = useAuthState(auth);


    const menuSweeper = () => {
        setMenu(!menu)

    }
  return (
    <div className="third-color-bg navbar-full">
      <div className="container mx-auto py-7 flex justify-between items-center relative">
        <div className="logo-holder w-28 lg:w-36">
          <img className="w-full" src={img} alt="" />
        </div>
        <div>
          <nav className={`lg-flex flex-col lg:flex-row absolute lg:static ${menu ? 'top-20': 'top-[-250px]'}`}>
            <NavLink className={({isActive}) => (isActive? "activeRoute" : "inactiveRoute")} to="/">Home</NavLink>
            <NavLink className={({isActive}) => (isActive? "activeRoute" : "inactiveRoute")} to="/blogs">Blog</NavLink>
            {user && <NavLink className={({isActive}) => (isActive? "activeRoute" : "inactiveRoute")} to="myitems">My Items</NavLink>}
            {
              user && <NavLink className={({isActive}) => (isActive? "activeRoute" : "inactiveRoute")} to="additems">Add Items</NavLink>
            }
            {
              user && <NavLink className={({isActive}) => (isActive? "activeRoute" : "inactiveRoute")} to="manageInventory">Manage Inventory</NavLink>
            }
            {
              user?  <button onClick={()=>signOut(auth)} className="btn2 ml-5" href="">Sign Out</button> :           
              <NavLink
              className={({isActive}) => (isActive? "activeRoute" : "inactiveRoute")}
              to="/login"
            >
              Login
            </NavLink>
            }
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
