import { Route, Routes, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import AddItems from "./components/AddItems/AddItems";
import Blogs from "./components/Blogs/Blogs";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import ManageInventory from "./components/ManageInventory/ManageInventory";
import MyItems from "./components/MyItems/MyItems";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Register from "./components/Register/Register";
import RequireAuth from "./components/RequireAuth/RequireAuth";


function App() {
  const location = useLocation();
  return (
    <div className="App">
      <Header></Header>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/blog" element={<Blogs></Blogs>}></Route>
          <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
          <Route path="login" element={<Login></Login>}></Route>
          <Route path="register" element={<Register></Register>}></Route>
          <Route
            path="manageinventory"
            element={<RequireAuth><ManageInventory></ManageInventory></RequireAuth>}
          ></Route>
          <Route path="additems" element={<RequireAuth><AddItems></AddItems></RequireAuth>}></Route>
          <Route path="myitems" element={<RequireAuth><MyItems></MyItems></RequireAuth>}></Route>
          <Route path="/inventory/:id" element={<RequireAuth><ProductDetails></ProductDetails></RequireAuth>}></Route>
        </Routes>
        <ToastContainer position="bottom-right"></ToastContainer>

      <Footer></Footer>
    </div>
  );
}

export default App;
