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

    </div>
  );
};

export default AnimatedRoute;
