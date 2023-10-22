import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Axios from "axios";

export const saveApiData = createAsyncThunk("save/api", async(id)=>{
    const response = await Axios.get(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`);
    const data = response.data.data.recipe;
    return data;
})

const saveApi = createSlice({
    name: "saveApi",
    initialState:{
        saveRecipe: [],
        loading: false
    },
    extraReducers: function(builder){
        builder
        .addCase(saveApiData.pending, (state) =>{
            state.loading=true;
        })
        .addCase(saveApiData.fulfilled, (state,action)=>{
            state.saveRecipe = action.payload;
            state.loading=false;
        })
        .addCase(saveApiData.rejected,(state, action)=>{
            console.log("Error");
        })
    }
})

export default saveApi.reducer;