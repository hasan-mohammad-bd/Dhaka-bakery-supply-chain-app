import { Route, Routes, useLocation } from "react-router-dom";
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
import Register from "./components/Register/Register";


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
            element={<ManageInventory></ManageInventory>}
          ></Route>
          <Route path="additems" element={<AddItems></AddItems>}></Route>
          <Route path="myitems" element={<MyItems></MyItems>}></Route>
        </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
