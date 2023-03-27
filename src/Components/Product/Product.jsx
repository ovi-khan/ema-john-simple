import React from 'react';
import './Product.css'

const Product = (props) => {
    const {id, img, name, price, seller, ratings} = props.product
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-details'>
                <h2>{name}</h2>
                <h4>Price: ${price}</h4>
                <h4>Ratings: {ratings}</h4>
                <h4>Manufacturar: {seller}</h4>
            </div>
            <button className='cart-btn'>Add to Cart</button>
        </div>
    );
};

export default Product;<h2>This is product</h2>