import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Axios from "axios";

export const fetchApi = createAsyncThunk("recipe/api", async(args)=>{
    const response = await Axios.get(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${args}`);
    const data = response.data.data.recipes;
    return data;
});

const searchbarApi = createSlice({
    name: "searchbarApi",
    initialState:{
        recipes: [],
        loading: false
    },
    extraReducers: function(builder){
        builder
        .addCase(fetchApi.pending, (state) =>{
            state.loading=true
        })
        .addCase(fetchApi.fulfilled, (state,action)=>{
            state.recipes= action.payload
            state.loading=false
        })
        .addCase(fetchApi.rejected,(state,action)=>{
            console.log('error')
        })
    }
})

export default searchbarApi.reducer;