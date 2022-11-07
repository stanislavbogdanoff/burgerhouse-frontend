import React, { useState } from 'react'
import Slider from "react-slick"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import {BsPlusLg} from 'react-icons/bs'

import './Sliders.css'

const DrinkSlider = ({updateOrderData, data}) => {

  const [ isExpanded, setIsExpanded ] = useState(false)

  const settingsDrink = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (oldIndex, newIndex) => {
      switch (newIndex) {
          case 0: 
            updateOrderData("drinkChoice", "cola")
            break
          case 1:
            updateOrderData("drinkChoice", "pepsi")
            break
          default: break
      }
    }
  }

  return (
    <div className="wrapper sec">
    <div className="more_row">
      <h2>4. Add Drink</h2>
      <button 
        className={isExpanded ? 'plus-btn active' : 'plus-btn'}
        onClick={() => {
          setIsExpanded(!isExpanded)
          if (!isExpanded) {
            updateOrderData("drinkChoice", "cola")
          } else {
            updateOrderData("drinkChoice", "")
          }
        }}
      >
        <BsPlusLg />
      </button>
    </div>

    <div className={isExpanded ? 'add_content active' : 'add_content'}>

      <div className="add_slider-box">
        <div className="burger-box">
          <Slider {...settingsDrink} className='add_slider drink_slider'>
            <div className="add_slider-item">
              <div className="add_slider-item-content">
                <img src={require("../../images/coca.png")} alt="" />
              </div>
            </div>
            <div className="add_slider-item">
              <div className="add_slider-item-content">
                <img src={require("../../images/pepi.png")} alt="" />
              </div>
            </div>
          </Slider>
        </div>
      </div>

      <div className="add_form">
        <p>Your drink of choice</p>
        <h2 className='user-choice'>
          {data}
        </h2>
      </div>

    </div>
  </div>
  )
}

export default DrinkSlider