import { createSlice, current } from "@reduxjs/toolkit";


const addRemoveSlice = createSlice({
    name:"addRemoveList",
    initialState:{
        setAddRemova:localStorage.getItem("Items") !== null
        ? JSON.parse(localStorage.getItem("Items"))
        : []
    },


    reducers:{
        add:(state,action) => {
            state.setAddRemova.push(action.payload)
            let data = JSON.stringify(current(state.setAddRemova));
            localStorage.setItem("Items", data)
        },
        remove:(state,action) => {
            state.setAddRemova = state.setAddRemova.filter((item) => item.id !== action.payload);
            let data = JSON.stringify(state.setAddRemova);
            localStorage.setItem("Items", data)
        },
    }
});

export const {add, remove} = addRemoveSlice.actions;
export default addRemoveSlice.reducer;