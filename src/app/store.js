import {configureStore} from "@reduxjs/toolkit"
import productsReducer from "../reducers/product/productSlice"

export default configureStore({
    reducer: {
        products: productsReducer
    }
})