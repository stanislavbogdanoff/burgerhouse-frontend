import axios from 'axios'

const API_URL = "/orders/"
const API_URL_SINGLE = "/order/"

// Get all orders
const getOrders = async () => {
  const response = await axios.get(API_URL)
  return response.data
}

// Post a new order
const addOrder = async (orderData) => {
  const response = await axios.post(API_URL_SINGLE, orderData)
  return response.data
}

// Delete order
const deleteOrder = async (id) => {
  const response = await axios.delete(API_URL_SINGLE + id)
  return response.data
}

const ordersService = {
  addOrder,
  getOrders,
  deleteOrder
}

export default ordersService