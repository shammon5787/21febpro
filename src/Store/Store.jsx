import { configureStore } from "@reduxjs/toolkit";
import CardReducer from './CardSlice.jsx'
import CatrgoryReducer from './CategorySlice.jsx'

const Store = configureStore({
    reducer:{
        card: CardReducer ,
        category: CatrgoryReducer ,
    }
})

export default Store