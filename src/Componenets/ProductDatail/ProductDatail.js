import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDatail = () => {
    const { productId } = useParams();
    const [loading, setLoading] = useState(true);
    const [product, setProduct] = useState([]);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/photos/${productId}`)
            .then(res => res.json())
            .then(data => setProduct(data));
        setLoading(false);
    }, [productId]);
    return (
        <div>
            <img src={product.thumbnailUrl} alt="" />
            <p>{product.title}-{product.id}</p>

            <div className={` ${loading ? 'flex justify-center mt-10' : 'hidden'}`}>
                <svg class="animate-spin bg-black  h-5 w-5 mr-3 ..." viewBox="0 0 24 24">

                </svg>
            </div>

        </div>
    );
};

export default ProductDatail;