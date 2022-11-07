import { configureStore } from '@reduxjs/toolkit'

import orderReducer from '../services/ordersSlice'

export const store = configureStore({
  reducer: {
    orders: orderReducer
  }
})