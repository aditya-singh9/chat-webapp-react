import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slices/userSlice";
import threadReducer from "../slices/threadSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    thread: threadReducer,
  },
});
