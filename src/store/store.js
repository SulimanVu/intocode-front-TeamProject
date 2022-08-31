import { configureStore } from "@reduxjs/toolkit";
import application from '../features/applicationSlice'
import student from '../features/studentSlice'
import note from '../features/noteSlice'

export const store = configureStore({
    reducer: {application, student, note}
})