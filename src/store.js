import { configureStore } from "@reduxjs/toolkit";
import countSlice from './slicer/count'

export const store = configureStore({
    reducer:{
        count : countSlice
    }
})