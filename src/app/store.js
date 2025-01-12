import { configureStore } from '@reduxjs/toolkit';
import cartItemManager from '../Components/slice/cartSlice'; // Import the reducer

const store = configureStore({
  reducer: {
    cartItemManager, // Register the reducer
  },
});

export default store;

// import { configureStore } from '@reduxjs/toolkit'
// import cartSlice from '../Components/slice/cartSlice'

// export const store = configureStore({
//   reducer: {
//     cartItemManager: cartSlice.reducer
//   },
// })

