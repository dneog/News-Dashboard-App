import { configureStore, combineReducers } from "@reduxjs/toolkit";
import NewsReducer from "./NewsSlice";
import FilterReducer from "./FilterSlice";
const rootReducers= combineReducers({
  news : NewsReducer,
  filter : FilterReducer 
})

const store= configureStore({
    reducer: rootReducers

})

export default store