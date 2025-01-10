import { configureStore } from '@reduxjs/toolkit'
import cartSlice from '../Components/slice/cartSlice'

export const store = configureStore({
  reducer: {
    cartItemManager: cartSlice.reducer
  },
})

