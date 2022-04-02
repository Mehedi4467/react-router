import React from 'react';

const Product = ({ product }) => {

    const { thumbnailUrl, title } = product;
    return (
        <div>
            <div>
                <img src={thumbnailUrl} alt="" />
                <p title={title}>{title.length === 20 ? title : title.slice(0, 20) + '...'}</p>
                <button style={{ cursor: 'pointer' }}>Details</button>
            </div>
        </div>
    );
};

export default Product;