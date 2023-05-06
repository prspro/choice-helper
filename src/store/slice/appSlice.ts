import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: {list: string[]} = {
  list: [],
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<string>) => {
      state.list.push(action.payload);
    },
  },
});

export const {
  addItem,
} = appSlice.actions;
export default appSlice.reducer;