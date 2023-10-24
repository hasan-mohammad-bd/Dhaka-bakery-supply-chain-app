
import { useEffect, useState } from "react";


const useProducts = () =>{
    const [products, setProducts] = useState([]);

  
    useEffect(() => {
      fetch("https://bakery-7p8g.onrender.com")
        .then((res) => res.json())
        .then((data) => setProducts(data));
    }, []);

    return [products, setProducts]
}

export default useProducts;