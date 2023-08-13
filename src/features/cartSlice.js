import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItem: [],
    amount: 0,
    total: 0,
    isLoading: true
  },
  reducers: {},
});
export default cartSlice.reducer;
