import React from 'react'
import './css/productItem.css'
import { FaStar, FaArrowCircleRight } from 'react-icons/fa'

const ProductItem = ({ image, name, price, stars }) => {
    const generateStars = () => {
        let myStars = []
        for (let i = 0; i < 5; i++) {
            myStars.push(<FaStar className={i < stars ? 'icon-dark' : 'icon-light'} key={i} />)
        }
        return <p>{myStars}</p>
    }

    return (
        <div className='product-item'>
            <div className="product-item-inner">
                <div className="product-image" style={{ backgroundImage: `url('${image}')` }}></div>

                <div className="product-detail">
                    <div className="product-detail-text">
                        <h3>{name}</h3>
                        <h2>{price}</h2>
                        {generateStars()}
                    </div>

                    <div className="product-detail-button">{<FaArrowCircleRight className='view-detail' />}</div>
                </div>
            </div>
        </div>
    )
}

export default ProductItem