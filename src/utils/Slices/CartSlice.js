import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: []
  },
  //! reducers 
  reducers: {
    addItem: (state, action) => {
      //? we are mutating the state of cartSlice here!
      //? Redu uses Immer js BTS to wrk on immutable state , so that we can mutate diratcly
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    deleteCart: (state) => {  // RTK provides only 2 options 
      state.items.length = 0; //   1. Either we can Mutate the original state's properties 
      // return [{items : []}] 2. Return a Entirely new object that can replace the original state
    },
  },
});

export const { addItem, removeItem, deleteCart } = cartSlice.actions;
export default cartSlice.reducer;
