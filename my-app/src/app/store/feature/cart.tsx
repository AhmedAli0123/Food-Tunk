import { Cart } from '@/app/utilits/type'
import { createSlice } from '@reduxjs/toolkit'



// Define the initial state using that type
const initialState: Cart[]  = []

export const cartSlice = createSlice({
  name: 'cart',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Add a new item to the cart
    addToCart(state, action) {
      let uuid = Math.floor(1000 + Math.random() * 9000);
      let newObj = { ...action.payload, uuid, quantity: 1 }; // Add a default quantity of 1
      state.push(newObj);
    },

    // Increase the quantity of a specific cart item
    increaseQuantity(state, action) {
      const item = state.find((product) => product.uuid === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },

    // Decrease the quantity of a specific cart item
    decreaseQuantity(state, action) {
      const item = state.find((product) => product.uuid === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },

    // Remove an item from the cart
    removeFromCart(state, action) {
      return state.filter((product) => product.uuid !== action.payload);
    },
  },
})

export const {addToCart,increaseQuantity,decreaseQuantity,removeFromCart} = cartSlice.actions

// Other code such as selectors can use the imported `RootState` type

export default cartSlice.reducer