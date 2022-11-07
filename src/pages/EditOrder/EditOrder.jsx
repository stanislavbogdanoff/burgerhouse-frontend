import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import './EditOrder.css'

const EditOrder = () => {

  const {id} = useParams()

  const navigate = useNavigate()

  const [ orderData, setOrderData ] = useState({
    burgerType: '',
    pattiesNumber: '',
    sauce: ''
  })

  const { burgerType, pattiesNumber, sauce } = orderData

  useEffect(() => {
    loadOrder()
  }, [])

  const loadOrder = async () => {
    const result = await axios.get(`http://localhost:8080/orders/${id}`) 
    setOrderData(result.data)
  }

  const handleInputChange = (e) => {
    setOrderData({...orderData, [e.target.name]: e.target.value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await axios.put(`http://localhost:8080/order/${id}`, orderData)
    navigate("/")
  }

  return (
    <div className="add_page page">
      <section className="add_section">
        <div className="container">

          <form className='add_form' onSubmit={handleSubmit}>

            <label htmlFor=".add_form">Edit Existing Order</label>

            <input 
              type={"text"}
              placeholder='Type of Burger' 
              required
              name='burgerType'
              value={burgerType}
              onChange={handleInputChange}
            />
            <input 
              type={"text"} 
              placeholder='Number of Patties'
              required
              name='pattiesNumber'
              value={pattiesNumber}
              onChange={handleInputChange}
            />
            <input 
              type={"text"} 
              placeholder='Sauce' 
              required
              name='sauce'
              value={sauce}
              onChange={handleInputChange}
            />
            <div className="add_form-btns-box">
              <button type="submit" className='white-btn'>
                Edit Order
              </button>
              <button 
                onClick={() => navigate("/")}
                type='button' 
                className='white-btn red-btn'
              >
                Cancel
              </button>
            </div>

          </form>

        </div>
      </section>
    </div>
  )
}

export default EditOrder