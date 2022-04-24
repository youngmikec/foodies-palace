import React from 'react'
import ProductItem from '../../components/ProductItem'
import './css/products.css'

const Products = () => {
  return (
    <div className='home-products'>
      <div className="container-top">
        <span>Top</span>
        <h2>Our Featured Food</h2>
      </div>

      <div className="container">
        <ProductItem name="Vegetable Salad" image='../img/food1.jpg' price="78.99" stars={3} />
        <ProductItem name="Fruit Salad salad" image='../img/food2.jpg' price="120.55" stars={5} />
        <ProductItem name="Cabbage and Berry" image='../img/food3.jpg' price="90.99" stars={4} />
        <ProductItem name="Sandwich" image='../img/food4.jpg' price="190.80" stars={5} />
      </div>
    </div>
  )
}

export default Products