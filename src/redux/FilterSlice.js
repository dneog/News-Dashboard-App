import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  pogress : [],
  
}

const FilterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    FILTER_NEWS(state, action){
      const {allNews, data} = action.payload
      let temp = []
      if(data == 'All'){
        temp = allNews
      }else{
        temp = allNews.filter((news) => news.attributes.category == data)

      }

      state.pogress = temp

    },
    // SEARCH_NEWS(state, action){
    //   const {allNews, searchData} = action.payload
    //   let searchText
    //   if(searchData !== ''){
    //     searchText = allNews.filter((data) => data.attributes.headline.toLowerCase().includes(searchData.toLowerCase()))
    //   }else{
    //     searchText = allNews
    //   }

    //   state.pogress = searchText
     
    // }
  }
});

export const {FILTER_NEWS} = FilterSlice.actions
export const selectFilterdNews = (state) => state.filter.pogress

export default FilterSlice.reducer