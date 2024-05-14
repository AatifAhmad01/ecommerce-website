import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    initialState: {
        items: []
    },
    name: 'cart',
    reducers: {
        addItem: (state, action) => {
            state.items = [...state.items, action.payload]



        },

        removeItem: (state, action) => {
            state.items = state.items.filter(item => item.id != action.payload)
        },
    }
})

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;