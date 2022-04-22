import React from 'react'
import Header from '../components/Home/Header'
import About from '../components/Home/About'
import Products from '../components/Home/Products'
import Footer from '../components/Home/Footer'

const Home = () => {
    return (
        <div className='main'>
            <Header />
            <About />
            <Products />
            <Footer />
        </div>
    )
}

export default Home