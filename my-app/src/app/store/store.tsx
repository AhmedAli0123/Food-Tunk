import { configureStore } from '@reduxjs/toolkit'
import  cartSlice  from './feature/cart'
import  productSlice  from './feature/product'
// ...

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    products:productSlice
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch