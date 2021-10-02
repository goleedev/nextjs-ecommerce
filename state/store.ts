import { configureStore } from '@reduxjs/toolkit'

import { cartReducer } from './cart.slice'

const reducer = {
  cart: cartReducer
}

const store = configureStore({
  reducer
})

export type AppDispatch = typeof store.dispatch

export default store
