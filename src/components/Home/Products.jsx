import React from 'react'
import ProductItem from '../../components/ProductItem'
import './css/products.css'

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
  ]

  return (
    <div className='home-products'>
      <div className="container-top">
        <span>Top</span>
        <h2>Our Featured Food</h2>
      </div>

      <div className="my-container">

        {products.map((product, index) => {
          return (
            <ProductItem key={index} image={product.image}
              item={product.food_name}
              price={product.price}
              stars={product.rating} />
          )
        })}
      </div>
    </div>
  )
}

export default Products