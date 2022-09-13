import React from 'react'
import  '../../src/components/home.css'
import Header from './Header'
import revolt from '../images/revolt.png'
import Store from './Store'
import About from './About'
import Footer from './Footer'

function Home() {
  return (
    <div className="home">
      <Header/> 
      <div className='main-text'>
      <h1 >Latest <br/>Collection<br/><i className='number'>2022</i></h1>
      <p>The style of shoe available to consumers are endless and the discounts are endless</p>
      <button className='contact-button'>Shop Now</button>
      </div>
      <img src={revolt} alt="#" className="main-img"/>
      <Store/>
      <About/>
      <Footer/>
    </div>
  )
}

export default Home