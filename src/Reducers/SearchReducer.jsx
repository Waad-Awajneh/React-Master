import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const searchURL = "http://localhost:8000/api/search";



export const getSearchData = createAsyncThunk(
  "search/getSearchData",
  async () => {
   const response = await axios.get(searchURL);
   return response.data;

  }
);


const initialState = {
  searchData: [],
userSearchData:[],
postSearchData:[],
search:"",
};

export const SearchReducer = createSlice({
  name: "SearchData",
  initialState,
  reducers: {
    getUserSearchData: (state, action) => {  
      state.userSearchData = state.searchData?.users?.filter((ele) => {
        return ele.full_name.includes(action.payload);
      });
    },
    getPostSearchData: (state, action) => {
      state.postSearchData = state.searchData?.posts?.filter((ele) => {
    
        return ele.title.includes(action.payload)||ele.post_owner.includes(action.payload)||ele.post_content
.includes(action.payload)
      });
    },
    setSearch: (state, action) => {
      state.search = action.payload
    

    },
 
  },
  extraReducers: (builder) => {
    builder.addCase(getSearchData.pending, (state) => {
      state.status = "Pending";
    });
    builder.addCase(getSearchData.fulfilled, (state, action) => {
      state.status = "Fulfilled";
      console.log(action.payload);
      state.searchData = action.payload;
    });

    builder.addCase(getSearchData.rejected, (state) => {
      state.status = "Rejected";
    });


   
  },
});


export const { getPostSearchData ,getUserSearchData,setSearch } = SearchReducer.actions;

export default SearchReducer.reducer;
