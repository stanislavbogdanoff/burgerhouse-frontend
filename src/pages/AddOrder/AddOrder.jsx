import React, { useEffect, useState } from 'react'
import Slider from "react-slick"

import FriesSlider from '../../components/InputSlider/FriesSlider'

import OrderCard from '../../components/OrderCard/OrderCard'

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import {SiMcdonalds, SiBurgerking} from 'react-icons/si'
import {BsPlusLg} from 'react-icons/bs'
import {FaMinus} from 'react-icons/fa'

import './AddOrder.css'
import DrinkSlider from '../../components/InputSlider/DrinkSlider'
import SauceSlider from '../../components/InputSlider/SauceSlider'

const AddOrder = () => {

  const [ orderData, setOrderData ] = useState({
    customerName: '',
    burgerType: 'hamburger',
    pattiesNumber: 1,
    sauce: 'ranch',
    restaurant: 'md',
    friesChoice: '',
    drinkChoice: ''
  })

  const { customerName, burgerType, pattiesNumber, sauce, restaurant, friesChoice, drinkChoice } = orderData

  const handleInputChange = (e) => {
    setOrderData({...orderData, [e.target.name]: e.target.value})
  }

  useEffect(() => {
    document.title = "BurgerHouse - Add Order"
  }, [])

  const updateOrderData = (dataField, newData) => {
    setOrderData({...orderData, [dataField]: newData})
  }

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (oldIndex, newIndex) => {
      switch (newIndex) {
          case 0: 
            setOrderData({...orderData, burgerType: "hamburger"})
            break
          case 1:
            setOrderData({...orderData, burgerType: "cheeseburger"})
            break
          case 2:
            setOrderData({...orderData, burgerType: "chicken"})
            break
          default: break
      }
    }
  }

  return (
    
    <div className="add_page page">
      <section className="add_section">
        <div className="container">
          <div className="wrapper-box">
            
            <div className="add_wrapper wrapper">

              <h1>IT'S BURGIN' TIME</h1>

              <div className="rest_choice-row">
                <button 
                  className={restaurant === "md" ? "rest_choice-btn active" : "rest_choice-btn"}
                  onClick={() => setOrderData({...orderData, restaurant: "md"})}
                >
                  <SiMcdonalds/>
                </button>
                <button 
                  className={restaurant === "bk" ? "rest_choice-btn active" : "rest_choice-btn"}
                  onClick={() => setOrderData({...orderData, restaurant: "bk"})}
                >
                  <SiBurgerking/>
                </button>
              </div>

              <div className="row">
                <h3>Enter your name</h3>
                <input 
                  type={"text"}
                  placeholder='Your Name' 
                  required
                  name='customerName'
                  value={customerName}
                  onChange={handleInputChange}
                />
              </div>

              <div className="title_row">
                <h2>1. Make burger</h2>
              </div>

              <div className="add_content active">
                
              
                <div className="add_slider-box">
                  

                  <div className="burger-box">

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

                    {
                      pattiesNumber === 2 && (
                        <div className="sec-burgers-box">
                          <img src={require(`../../images/${burgerType}.png`)} alt="" className='sec-burger first' />
                        </div>
                      )
                    }

                    {
                      pattiesNumber === 3 && (
                        <div className="sec-burgers-box">
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
                          setOrderData({...orderData, pattiesNumber: pattiesNumber - 1})
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
                          setOrderData({...orderData, pattiesNumber: pattiesNumber + 1})
                        }
                      }}
                    >
                      <BsPlusLg/>
                    </button>
                  </div>

                </form>
              </div>

              <SauceSlider 
                updateOrderData={updateOrderData}
                data={sauce}
              />

            </div>

            <FriesSlider
              updateOrderData={updateOrderData}
              data={friesChoice}
            />

            <DrinkSlider 
              updateOrderData={updateOrderData}
              data={drinkChoice}
            />

          </div>

          <div className="add_side">
                <OrderCard
                  simple
                  name={customerName}
                  type={burgerType}
                  restaurant={restaurant}
                  sauce={sauce}
                  number={pattiesNumber}
                  fries={friesChoice}
                  drink={drinkChoice}
                  orderData={orderData}
                />
          </div>

        
        </div>
      </section>
    </div>
  )
}

export default AddOrder