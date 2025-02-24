import { configureStore } from "@reduxjs/toolkit";
import CardReducer from './CardSlice.jsx'

const Store = configureStore({
    reducer:{
        card: CardReducer ,
    }
})

export default Store