import { configureStore } from '@reduxjs/toolkit';
import cartItemManager from '../components/slice/cartSlice'; 

const store = configureStore({
  reducer: {
    cartItemManager, 
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

