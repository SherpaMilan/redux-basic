import { configureStore } from "@reduxjs/toolkit";
import itemReducerrr from "./creatingSlice";

export default configureStore({
  reducer: {
    //place your data as file.
    firstItem: itemReducerrr,
  },
});
