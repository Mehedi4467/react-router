import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Product = ({ product }) => {
    const navigate = useNavigate();
    const { thumbnailUrl, title, id } = product;
    const showProductDetails = () => {
        const path = `/product/${id}`;
        navigate(path);
    }
    return (
        <div>
            <div>
                <img src={thumbnailUrl} alt="" />
                <p title={title}>{title.length === 20 ? title : title.slice(0, 20) + '...'}</p>
                <Link to={`product/${id}`}>A click</Link>
                <button onClick={showProductDetails} style={{ cursor: 'pointer' }}>Details-{id}</button>
            </div>
        </div>
    );
};

export default Product;