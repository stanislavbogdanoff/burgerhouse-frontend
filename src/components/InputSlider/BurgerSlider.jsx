import React from 'react'

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import {BsPlusLg} from 'react-icons/bs'
import {FaMinus} from 'react-icons/fa'
import BurgerView from '../BurgerReview/BurgerView'

const BurgerSlider = ({ updateOrderData, restaurant, burgerType, pattiesNumber}) => {

  return (
    <>
      <div className="title_row">
        <h2>1. Make burger</h2>
      </div>

      <div className="add_content active">
        
      
        <div className="add_slider-box">

          <BurgerView 
            updateOrderData={updateOrderData}
            restaurant={restaurant}
            burgerType={burgerType}
            pattiesNumber={pattiesNumber}
          />

        </div>

        <form className='add_form burger_form'>
          <div className="add_form">
            <p>Your buger of choice</p>
            <h2 className='user-choice'>
              {burgerType}
            </h2>
          </div>
          <p>Number of patties</p>
          <div className="patties-num-box">
            <button 
              className={pattiesNumber === 1 ? "num-btn inactive" : "num-btn"} 
              onClick={(e) => {
                e.preventDefault()
                if (pattiesNumber > 1) {
                  updateOrderData("pattiesNumber", pattiesNumber - 1)
                }
              }}
            >
              <FaMinus/>
            </button>
            {pattiesNumber}
            <button 
              className={pattiesNumber === 3 ? "num-btn inactive" : "num-btn"} 
              onClick={(e) => {
                e.preventDefault()
                if (pattiesNumber < 3) {
                  updateOrderData("pattiesNumber", pattiesNumber + 1)
                }
              }}
            >
              <BsPlusLg/>
            </button>
          </div>

        </form>
      </div>
    </>
  )
}

export default BurgerSlider