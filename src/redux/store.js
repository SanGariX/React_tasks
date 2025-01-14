import { configureStore } from "@reduxjs/toolkit"
import ThemeBtn from "./Slices/ThemeBtnSlice"
const store = configureStore({
    reducer:{
        ThemeBtn
    }
})
export default store