
import { useEffect, useState } from "react";


const useProducts = () =>{
    const [products, setProducts] = useState([]);
    console.log(products);
  
    useEffect(() => {
      if(products){
        fetch("https://stark-dusk-94643.herokuapp.com/product/")
        .then((res) => res.json())
        .then((data) => setProducts(data));
      }
    }, [products]);

    return [products, setProducts]
}

export default useProducts;