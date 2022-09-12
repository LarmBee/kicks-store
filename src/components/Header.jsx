import React from 'react'
import  '../../src/components/home.css'


function Header() {
  return (
    <div className='main-header'>
        <h2>Nike-Store</h2>
        <div className='nav-items'>
          <a href='#'>Home</a>
          <a href='#'>About</a>
          <a href='#'>Product</a>
          <a href='#'>Testimonial</a>
          <a href='#'>Shop</a>
          <button className='contact-button'>Contact Us</button>
        </div>

       
    </div>
  )
}

export default Header