import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import MyProduct from "../MyProduct/MyProduct";
import "./MyItems.css";

const MyItems = () => {
  const [products, setProducts] = useState([]);
  const [user, loading, error] = useAuthState(auth);
  console.log(products);

  useEffect(() => {
    const url = `http://localhost:5000/product/`;
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
      const url = `http://localhost:5000/product/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = products.filter((product) => product._id !== id);
          setProducts(remaining);
        });
    }
  };

  return (
    <div className="">
      <h1 className="text-center font-normal third-color-text text-4xl md:text-5xl mt-8 mt-10">
        My Items
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 my-8">
        {products.map((product) => (
          <MyProduct product={product} key={product._id} handleDelete={handleDelete}></MyProduct>
        ))}
      </div>
    </div>
  );
};

export default MyItems;
