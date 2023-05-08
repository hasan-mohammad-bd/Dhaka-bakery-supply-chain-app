
import { useEffect, useState } from "react";


const useProducts = () =>{
    const [products, setProducts] = useState([]);

  
    useEffect(() => {
      fetch("https://dhaka-bakery-server-side-production.up.railway.app/product")
        .then((res) => res.json())
        .then((data) => setProducts(data));
    }, []);

    return [products, setProducts]
}

export default useProducts;