import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
    isCartOpen: false
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action)=>{

        },
        removeFromCart: (state, action)=>{

        },
        setIsCartOpen: (state, action)=>{

        }
    }
})

export const {addToCart, removeFromCart, setIsCartOpen} = cartSlice.actions
export default cartSlice.reducer;