import React, { useEffect, useState } from 'react';
import Product from './Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const url = 'https://jsonplaceholder.typicode.com/photos';
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);
    console.log(products);
    return (
        <div>
            <h1>All products</h1>
            <div className='shop-body'>
                {products.slice(0, 20).map(product => <Product product={product} key={product.id}></Product>)}
            </div>
        </div>
    );
};

export default Shop;