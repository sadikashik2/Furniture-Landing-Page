import React from 'react'
import Hero from './Hero'
import Whychoose from './Whychoose'
import Shop from '../Shop/Shop'
import Products from '../Shop/Products'
import Experiences from './Experiences'
import Materials from './Materials'
import Testimonials from './Testimonials'

const Home = () => {
  return (
    <>
      <Hero></Hero>
      <Whychoose></Whychoose>
      <Products headline={"Best Selling Products"}></Products>
      <Experiences></Experiences>
      <Materials></Materials>
      <Testimonials></Testimonials>
    </>
  )
}

export default Home