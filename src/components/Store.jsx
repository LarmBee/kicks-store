import React from 'react'
import  '../../src/components/home.css'
import nike2 from '../images/nike2.png'
import nike3 from '../images/nike3.png'
import nike4 from '../images/nike4.png'
import nike5 from '../images/nike5.png'


function Store() {
  return (
    <div className='card-main'>
        <h1>LATEST PRODUCTS</h1>
        <div className='card'>
            <img className="card-img" alt="#" src={nike2}></img>
            <h4>Air Force One</h4>
            <h5>$20.20</h5>
        </div>
        <div className='card'>
            <img className="card-img" alt="#" src={nike3}></img>
            <h4>Air Force One</h4>
            <h5>$20.20</h5>
        </div>
        <div className='card'>
            <img className="card-img" alt="#" src={nike4}></img>
            <h4>Air Force One</h4>
            <h5>$20.20</h5>
        </div>
        <div className='card'>
            <img className="card-img" alt="#" src={nike5}></img>
            <h4>Air Force One</h4>
            <h5>$20.20</h5>
        </div>
    </div>
  )
}

export default Store