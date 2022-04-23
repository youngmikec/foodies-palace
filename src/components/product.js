import React from 'react';

import '../App.css';
import pic from '../assets/img/fried-chicken.jpg';
import Button from './Button.js';

const Product = (props) => {
    const cardImage = {
        width: '100%',
        height: '100%',
        textAlign: 'center',
    }
    return (
        <div>
            <div className='card'>
                <div className='card-header'>
                    <img src={pic} className='card-image' style={cardImage} alt='product' />
                </div>
                <div className='card-body'>
                    <h4>Product Name</h4>
                    <h3>$25.00</h3>
                </div>
                <div className='card-footer'>
                    <Button name={'View'} />
                </div>
            </div>
        </div>
    )
}

export default Product;