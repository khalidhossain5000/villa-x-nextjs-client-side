import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../Redux/Features/authSlice.js'

export const store =configureStore({
    reducer:{
    auth:authReducer
    }
})