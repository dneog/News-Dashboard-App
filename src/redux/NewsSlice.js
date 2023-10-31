import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    allNews: [],
    
}

const NewsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    SAVE_NEWS(state, action){
        state.allNews = action.payload
       
    }
  }
});

export const {SAVE_NEWS} = NewsSlice.actions
export const selectNews = (state)=> state.news.allNews

export default NewsSlice.reducer