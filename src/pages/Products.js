import React from 'react';
import '../App.css';
// import Product from '../components/product.js';
import ProductItem from '../components/ProductItem';
import products from '../assets/database/dishes';

const Products = () => {
    
    return (
        <div className='container' style={{marginTop: '5rem'}}>
            <h1>Featured Food Recipes</h1>
            <div className='flex-container'>
                {
                    products.length > 0 ? 
                    products.map((product, idx) => {
                        return <div>
                            <ProductItem 
                            image={product.image}
                            name={product.food_name}
                            price={product.price}
                            stars={product.rating}
                            key={idx}
                             />
                        </div>

                    }) : <h3>No product Available</h3>
                    
                }
            </div>
        </div>
    )
};

export default Products;