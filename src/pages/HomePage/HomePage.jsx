import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getOrders, reset } from '../../services/ordersSlice'

import OrderCard from '../../components/OrderCard/OrderCard'

import './HomePage.css'

const HomePage = () => {

  const dispatch = useDispatch()

  const { orders } = useSelector(
    state => state.orders
  )

  useEffect(() => {
    dispatch(getOrders())
    return () => {
      dispatch(reset())
    }
    
  }, [dispatch])

  console.log(orders)

  useEffect(() => {
    document.title = "BurgerHouse - All Orders"
  }, [])

  return (
    <div className="home_page page">      
      <section className="hero_section">
        <div className="container">
          <div className="wrapper">
            <h1>Orders</h1>
            {orders && 
              <div className="hero_grid">
                {orders.map((order, index) => {
                    return(
                      <OrderCard
                        key={index}
                        orderNumber={index+1}
                        id={order.id}
                        name={order.customerName}
                        description={order.burgerDescription}
                        restaurant={order.restaurant}
                        type={order.burgerType}
                        number={order.pattiesNumber}
                        sauce={order.sauce}
                        fries={order.friesChoice}
                        drink={order.drinkChoice}
                        price={order.price}
                      />
                    )
                  })
                }
              </div>
            }
            
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
