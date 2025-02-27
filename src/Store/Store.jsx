import { configureStore } from "@reduxjs/toolkit";
import CardReducer from './CardSlice.jsx'
import CatrgoryReducer from './CategorySlice.jsx'
import SearchReducer from './SearchSlice.jsx'

const Store = configureStore({
    reducer:{
        card: CardReducer ,
        category: CatrgoryReducer ,
        search: SearchReducer
    }
})

export default Store