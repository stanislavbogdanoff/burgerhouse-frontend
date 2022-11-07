import React from 'react'
import Slider from "react-slick"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import './Sliders.css'

const SauceSlider = ({updateOrderData, data}) => {

  const settingsSauce = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (oldIndex, newIndex) => {
      switch (newIndex) {
          case 0: 
            updateOrderData("sauce", "ranch")
            break
          case 1:
            updateOrderData("sauce", "bbq")
            break
            case 2:
              updateOrderData("sauce", "french")
            break
          default: break
      }
    }
  }

  return (
    <>
      <div className="title_row">
        <h2>2. Choose Sauce</h2>
      </div>

      <div className='add_content active'>
        
        <div className="add_slider-box">
          <div className="burger-box">
          
          <Slider {...settingsSauce} className='add_slider drink_slider'>
            <div className="add_slider-item">
              <div className="add_slider-item-content">
                <img src={require("../../images/s2.png")} alt="" />
              </div>
            </div>
            <div className="add_slider-item">
              <div className="add_slider-item-content">
                <img src={require("../../images/s1.png")} alt="" />
              </div>
            </div>
            <div className="add_slider-item">
              <div className="add_slider-item-content">
                <img src={require("../../images/s3.png")} alt="" />
              </div>
            </div>
          </Slider>
          </div>
          
        </div>
        <div className="add_form">
          <p>Your sauce of choice</p>
          <h2 className='user-choice'>
            {data}
          </h2>
        </div>
      </div>

    </>
  )
}

export default SauceSlider