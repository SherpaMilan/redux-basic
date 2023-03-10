import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  nameList: [],
};

const firstSlice = createSlice({
  //   // this is the name of the slice
  name: "userlist",
  initialState,
  reducers: {
    // creating function to update this data
    // receives two argument state and action or you can use any other names,
    // first part represents state, second represents paylod
    setNameList: (state, action) => {
      state.nameList = [...state.nameList, action.payload];
    },
  },
});

// this slice creates two objects
// reducer is state
const { reducer, actions } = firstSlice;

export const { setNameList } = actions;

export default reducer;
