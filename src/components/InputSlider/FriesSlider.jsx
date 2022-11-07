import React, {useState} from 'react'
import Slider from "react-slick"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import {BsPlusLg} from 'react-icons/bs'

import './Sliders.css'

const FriesSlider = ({updateOrderData, data}) => {
  const [ isExpanded, setIsExpanded ] = useState(false)

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (oldIndex, newIndex) => {
      switch (newIndex) {
          case 0: 
            updateOrderData("friesChoice", "large")
            break
          case 1:
            updateOrderData("friesChoice", "small")
            break
          default: break
      }
    }
  }
  
  return (
    <div className="wrapper sec">

      <div className="more_row">
        <h2>3. Add Fries</h2>
        <button 
          className={isExpanded ? 'plus-btn active' : 'plus-btn'}
          onClick={() => {
            setIsExpanded(!isExpanded)
            if (!isExpanded) {
              updateOrderData("friesChoice", "large")
            } else {
              updateOrderData("friesChoice", "")
            }
          }}
        >
          <BsPlusLg />
        </button>
      </div>

      <div className={isExpanded ? 'add_content active' : 'add_content'}>

        <div className="add_slider-box">
          <div className="burger-box">
            <Slider {...settings} className='add_slider drink_slider'>
              <div className="add_slider-item">
                <div className="add_slider-item-content">
                  <img src={require("../../images/large.png")} alt="" />
                </div>
              </div>
              <div className="add_slider-item">
                <div className="add_slider-item-content">
                  <img src={require("../../images/small.png")} alt="" />
                </div>
              </div>
            </Slider>
          </div>
        </div>

        <div className="add_form">
          <p>Your fries of choice</p>
          <h2 className='user-choice'>
            {data}
          </h2>
        </div>

      </div>

    </div>

  )
}

export default FriesSlider