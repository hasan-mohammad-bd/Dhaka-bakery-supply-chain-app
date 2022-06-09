import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import MyProduct from "../MyProduct/MyProduct";
import "./MyItems.css";

const MyItems = () => {
  const [products, setProducts] = useState([]);
  const [user, loading, error] = useAuthState(auth);


  useEffect(() => {
    const url = `https://stark-dusk-94643.herokuapp.com/product/`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const selectedData = data.filter(
          (singleData) => singleData.email === user.email
        );
        setProducts(selectedData);
      });
  }, [user]);

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      const url = `https://stark-dusk-94643.herokuapp.com/product/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {

          const remaining = products.filter((product) => product._id !== id);
          setProducts(remaining);
        });
    }
  };

  return (
    <div className="container mx-auto ">
      <h1 className="text-center font-normal third-color-text text-4xl md:text-5xl mt-8 mt-10">
        My Items
      </h1>
      <div className="user img-holder-card p-3 mt-4 user-holder third-color-bg">

          <div className="flex justify-between items-center flex-col md:flex-row">
          <div>
        {
           user && <button onClick={()=>signOut(auth)} className="btn6 ml-5 m-3 md:m-0" href="">Sign Out</button>
        }
          </div>
              <div className="flex justify-end items-center text-right"><div><h1 className="text-3xl mr-4">{user.displayName}</h1> <h2 className="text-sm mr-4">{user.email}</h2></div><div className="img-holder-card2"><img className="photo-round" src={user?.photoURL} alt="" /></div></div>
          </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 my-8">
        {products.map((product) => (
          <MyProduct product={product} key={product._id} handleDelete={handleDelete}></MyProduct>
        ))}
      </div>
    </div>
  );
};

export default MyItems;
