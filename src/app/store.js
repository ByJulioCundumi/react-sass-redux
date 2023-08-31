import {configureStore} from "@reduxjs/toolkit"
import productsReducer from "../reducers/product/productSlice"
import cartReducer from "../reducers/cart/cartSlice"

export default configureStore({
    reducer: {
        products: productsReducer,
        cart: cartReducer
    }
})