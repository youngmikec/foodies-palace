import React from 'react';
import '../App.css';
// import Product from '../components/product.js';
import ProductItem from '../components/ProductItem';

const Products = () => {
    const products = [
        {
            food_name: "Fried Chicken",
            rating: 4,
            image: "../img/fried-chicken.jpg",
            price: 78.98
        },
        {
            food_name: "Vegetable Salad",
            rating: 3,
            image: "../img/food1.jpg",
            price: 30.98
        },
        {
            food_name: "Cabbage & Berry",
            rating: 4,
            image: "../img/food2.jpg",
            price: 58.98
        },
        {
            food_name: "Sandwitch",
            rating: 4,
            image: "../img/food3.jpg",
            price: 78.98
        },
        {
            food_name: "KFC cripsy Chicken",
            rating: 2,
            image: "../img/foodimage1.jpg",
            price: 69.00
        },
        {
            food_name: "Vege topping Pizza",
            rating: 5,
            image: "../img/foodimage2.jpg",
            price: 102.98
        },
    ]
    
    return (
        <div className='container' style={{marginTop: '5rem'}}>
            <h1>Featured Food Recipes</h1>
            <div className='flex-container flex-row'>
                {
                    products.length > 0 ? 
                    products.map((product, idx) => {
                        return <div className='flex-3'>
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
                {/* <div className='flex-3'>
                    <ProductItem  />
                </div> */}
                {/* <div className='flex-3'>
                    <Product />
                </div>
                <div className='flex-3'>
                    <Product />
                </div>
                <div className='flex-3'>
                    <Product />
                </div> */}
            </div>
        </div>
    )
};

export default Products;