import React, { useEffect, useState } from 'react'

import {SiMcdonalds, SiBurgerking} from 'react-icons/si'

import DrinkSlider from '../../components/InputSlider/DrinkSlider'
import FriesSlider from '../../components/InputSlider/FriesSlider'
import SauceSlider from '../../components/InputSlider/SauceSlider'
import BurgerSlider from '../../components/InputSlider/BurgerSlider'
import OrderCard from '../../components/OrderCard/OrderCard'

import './AddOrder.css'

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

              <BurgerSlider 
                updateOrderData={updateOrderData}
                restaurant={restaurant}
                burgerType={burgerType}
                pattiesNumber={pattiesNumber}
              />

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