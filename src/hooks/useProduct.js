import { useEffect, useState } from "react"

const useProduct = (url) => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    return [products, setProducts];
}

export default useProduct;