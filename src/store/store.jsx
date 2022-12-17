import { configureStore } from "@reduxjs/toolkit";
import DataReducer from "../Reducers/dataReducer";
import postReducer from "../Reducers/PostReducer";
export const store = configureStore({
  reducer: {
    Data: DataReducer,
    PostsData: postReducer,
  },
});
