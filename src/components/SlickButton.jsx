import React from 'react'
import './css/slickButton.css'

const SlickButton = ({ onCustomClick, customClass = "", text, nature = "dark" }) => {
    return (
        <div className={`slick-button ${nature} ${customClass}`} onClick={onCustomClick}>
            <span>{text}</span>
        </div>
    )
}

export default SlickButton