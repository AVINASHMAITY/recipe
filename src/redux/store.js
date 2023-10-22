import { configureStore } from "@reduxjs/toolkit";
import searchbarApi from "./recipeApiSlice/searchbarApi";
import saveApi from "./recipeApiSlice/saveApi";
import addRemove from "./recipeSlice/addRemove";

export default configureStore({
    reducer:{
        searchbarApiReducer:searchbarApi,
        saveApiReducer:saveApi,
        addRemoveReducer: addRemove
    }
})