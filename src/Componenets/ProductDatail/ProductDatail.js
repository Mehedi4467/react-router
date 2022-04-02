import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDatail = () => {
    const { productId } = useParams();
    return (
        <div>
            <h1>Product Details : {productId}</h1>
        </div>
    );
};

export default ProductDatail;