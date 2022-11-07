import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import ordersService from "./ordersService"

const initialState = {
  orders: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: ''
}

//  Add new order
export const addOrder = createAsyncThunk(
  'orders/addOrder',
  async (orderData, thunkAPI) => {
    try {
      return await ordersService.addOrder(orderData)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

// Get all orders
export const getOrders = createAsyncThunk(
  'orders/getAllOrders',
  async (_, thunkAPI) => {
    try {
      return await ordersService.getOrders()
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

// Delete order
export const deleteOrder = createAsyncThunk(
  'orders/deleteOrder',
  async (id, thunkAPI) => {
    try {
      return await ordersService.deleteOrder(id)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
) 

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    reset: (state) => initialState
  },
  extraReducers: (builder) => {
    builder
      // Adding new order
      .addCase(addOrder.pending, (state) => {
        state.isLoading = true
      })
      .addCase(addOrder.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.orders.push(action.payload)
      })
      .addCase(addOrder.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      // Getting all orders
      .addCase(getOrders.pending, state => {
        state.isLoading = true
      })
      .addCase(getOrders.fulfilled, (state, action) => {
        state.isLoading = true
        state.isSuccess = true
        state.orders = action.payload
      })
      .addCase(getOrders.rejected, (state, action) => {
        state.isError = true
        state.isLoading = false
        state.message = action.payload
      })
      // Deleting order
      .addCase(deleteOrder.pending, state => {
        state.isLoading = true
      })
      .addCase(deleteOrder.fulfilled, (state, action) => {
        console.log(action.payload.id)
        state.isLoading = false
        state.isSuccess = true
        state.orders = state.orders.filter(
          (order) => order.id !== action.payload
        )
      })
      .addCase(deleteOrder.rejected, (state, action) => {
        state.isError = true
        state.isLoading = false
        state.message = action.payload
      })
  }
})

export const { reset } = ordersSlice.actions
export default ordersSlice.reducer