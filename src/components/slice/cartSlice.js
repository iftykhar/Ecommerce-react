import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

export const cartSlice = createSlice({
  name: 'cartItemManager',
  initialState,
  reducers: {
    abc: (state, action) => {
      console.log(action);
    },
  },
});

export const { abc } = cartSlice.actions;

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