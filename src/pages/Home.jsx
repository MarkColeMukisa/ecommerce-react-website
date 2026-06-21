import React from 'react'
import ProductCard from '../components/ProductCard'


const Home = () => {



  return (
    <div className="page">

      <div className="home-hero">
        <h1 className="home-title">Welcome to ShopHub</h1>
        <p className="home-subtitle">
          Discover amazing products at great prices
        </p>
      </div>

      <ProductCard />

    </div>
  )
}

export default Home