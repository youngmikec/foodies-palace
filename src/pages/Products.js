import React from 'react';
import '../App.css';
import Product from '../components/product.js';

const Products = () => {
    
    return (
        <div className='container'>
            <h1>Featured Food Recipes</h1>
            <div className='flex-container flex-row'>
                <div className='flex-3'>
                    <Product />
                </div>
                <div className='flex-3'>
                    <Product />
                </div>
                <div className='flex-3'>
                    <Product />
                </div>
                <div className='flex-3'>
                    <Product />
                </div>
            </div>
        </div>
    )
};

export default Products;