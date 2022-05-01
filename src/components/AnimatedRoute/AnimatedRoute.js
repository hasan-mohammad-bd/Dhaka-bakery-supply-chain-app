import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import AddItems from "../AddItems/AddItems";
import Home from "../Home/Home";
import Login from "../Login/Login";
import ManageInventory from "../ManageInventory/ManageInventory";
import MyItems from "../MyItems/MyItems";
import PageNotFound from "../PageNotFound/PageNotFound";
import Register from "../Register/Register";
import { AnimatePresence } from 'framer-motion';
import Blogs from "../Blogs/Blogs";

const AnimatedRoute = () => {
  const location = useLocation();
  return (
    <div>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/blog" element={<Blogs></Blogs>}></Route>
          <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
          <Route path="login" element={<Login></Login>}></Route>
          <Route path="register" element={<Register></Register>}></Route>
          <Route
            path="manageinventory"
            element={<ManageInventory></ManageInventory>}
          ></Route>
          <Route path="additems" element={<AddItems></AddItems>}></Route>
          <Route path="myitems" element={<MyItems></MyItems>}></Route>
        </Routes>
      </AnimatePresence>
    </div>
  );
};

export default AnimatedRoute;
