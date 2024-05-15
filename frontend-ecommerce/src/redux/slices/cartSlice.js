import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    initialState: {
        items: []
    },
    name: 'cart',
    reducers: {

        addAllItems: (state, action) => {
            state.items = action.payload;
        },

        addItem: (state, action) => {

            for (var item of state.items) {
                if (item.id == action.payload.id) {
                    item.quantity = action.payload.quantity
                    state.items = [...state.items]
                    localStorage.setItem("cartItems", JSON.stringify(state));
                    return;
                }
            }

            state.items = [...state.items, action.payload]
            localStorage.setItem("cartItems", JSON.stringify(state));
        },

        removeItem: (state, action) => {
            state.items = state.items.filter(item => item.id != action.payload)
            localStorage.setItem("cartItems", JSON.stringify(state));
        },

        updateItem: (state, action) => {

            for (var item of state.items) {
                if (item.id == action.payload.id) {
                    item.quantity = action.payload.quantity
                    state.items = [...state.items]
                    localStorage.setItem("cartItems", JSON.stringify(state));
                }
            }
        },
    }
})

export const { addAllItems, addItem, removeItem, updateItem } = cartSlice.actions;
export default cartSlice.reducer;