import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const createSlice = createSlice({
  name: 'cartItemManager',
  initialState,
  reducers: {
    increment: (state) => {
      
      state.value += 1
    },
    
  },
})

export const { increment  } = createSlice.actions

export default createSlice.reducer