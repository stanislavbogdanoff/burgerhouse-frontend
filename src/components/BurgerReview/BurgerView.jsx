import React from 'react'
import Slider from "react-slick"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import './BurgerView.css'

const BurgerView = ({ small, updateOrderData, restaurant, burgerType, pattiesNumber, drinkChoice, friesChoice}) => {

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (oldIndex, newIndex) => {
      switch (newIndex) {
          case 0: 
            updateOrderData("burgerType", "hamburger")
            break
          case 1:
            updateOrderData("burgerType", "cheeseburger")
            break
          case 2:
            updateOrderData("burgerType", "chicken")
            break
          default: break
      }
    }
  }

  const setBurger = (type) => {
    return (
        <img src={require(`../../images/${type}.png`)} alt="" className='sec-burger main' />
    )
  }

  return (
    <div className="order-box">

      <div className={small ? "burger-box small" : "burger-box"}>

        {
          restaurant === "md" ? 
          (
            <>
              <img src={require("../../images/buntop1.png")} alt="" className='bun ' />
              <img src={require("../../images/topik1.png")} alt="" className='bun salad md_salad'/>
            </>
          )
          : 
          (
            <>
              <img src={require("../../images/buntop2.png")} alt="" className='bun ' />
              <img src={require("../../images/topik2.png")} alt="" className='bun salad'/>
            </>
          )
        }

        {!small &&
          <Slider {...settings} className='add_slider burger_slider'>
            <div className="add_slider-item">
              <div className="add_slider-item-content">
              <img src={require("../../images/hamburger.png")} alt="" />
              </div>
            </div>
            <div className="add_slider-item">
              <div className="add_slider-item-content">
                <img src={require("../../images/cheeseburger.png")} alt="" />
              </div>
            </div>
            <div className="add_slider-item">
              <div className="add_slider-item-content">
                <img src={require("../../images/chicken.png")} alt="" />
              </div>
            </div>
          </Slider>
        }

        { small &&
          pattiesNumber === 1 && (
            <div className="sec-burgers-box">
              {setBurger(burgerType)}
            </div>
          )
        }

        { !small &&
          pattiesNumber === 2 && (
            <div className="sec-burgers-box">
              <img src={require(`../../images/${burgerType}.png`)} alt="" className='sec-burger first' />
            </div>
          )
        }

        { small &&
          pattiesNumber === 2 && (
            <div className="sec-burgers-box">
              {setBurger(burgerType)}
              <img src={require(`../../images/${burgerType}.png`)} alt="" className='sec-burger first' />
            </div>
          )
        }

        { !small &&
          pattiesNumber === 3 && (
            <div className="sec-burgers-box">
              <img src={require(`../../images/${burgerType}.png`)} alt="" className='sec-burger first' />
              <img src={require(`../../images/${burgerType}.png`)} alt="" className='sec-burger second'/>
            </div>
          )
        }

        { small &&
          pattiesNumber === 3 && (
            <div className="sec-burgers-box">
              {setBurger(burgerType)}
              <img src={require(`../../images/${burgerType}.png`)} alt="" className='sec-burger first' />
              <img src={require(`../../images/${burgerType}.png`)} alt="" className='sec-burger second'/>
            </div>
          )
        }

        {
          restaurant === "md" ? 
          <img src={require("../../images/bunbot1.png")} alt="" className='bun' /> 
          : 
          <img src={require("../../images/bunbot2.png")} alt="" className='bun' />
        }

    </div>

    {
      friesChoice ==='large' && <img className='order-view-add fries' src={require("../../images/large.png")} alt='' />
    }

    {
      friesChoice ==='small' && <img className='order-view-add fries' src={require("../../images/small.png")} alt='' />
    }

    {
      drinkChoice ==='pepsi' && <img className='order-view-add' src={require("../../images/pepi.png")} alt='' />
    }

    {
      drinkChoice ==='cola' && <img className='order-view-add' src={require("../../images/coca.png")} alt='' />
    }

  </div>

  )
}

export default BurgerView