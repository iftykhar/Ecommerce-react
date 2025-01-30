import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

export const cartSlice = createSlice({
  name: 'cartItemManager',
  initialState:{
    cartItems: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
  },
  reducers: {
    addToCart: (state, action) => {
      
      let findProduct = state.cartItems.findIndex((item)=> item.id == action.payload.id)

      if(findProduct === -1 ){
        state.cartItems.push(action.payload);
      }else{
        state.cartItems[findProduct].qty += 1
      }
      localStorage.setItem('cart', JSON.stringify(state.cartItems));
    },
    
    increament:(state,action)=>{
      console.log(action);
      
    }
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;

// import { createSlice } from '@reduxjs/toolkit'

// const initialState = {
//   value: 0,
// }

// export const createSlice = createSlice({
//   name: 'cartItemManager',
//   initialState,
//   reducers: {
//     // increment: (state) => {
      
//     //   state.value += 1
//     // },
//     abc: (state,action)=> {
//             console.log(action)
//     }
    
//   },
// })

// export const { abc  } = createSlice.actions

// export default createSlice.reducer