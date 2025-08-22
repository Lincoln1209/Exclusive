import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: null,
}

export const ProductSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    ProductReducer : (state,action) => {
      state.value = action.payload
    },
    FilterReducer : (state,action) => {
      state.value = action.payload
    }
  },
})

export const { ProductReducer, FilterReducer } = ProductSlice.actions

export default ProductSlice.reducer