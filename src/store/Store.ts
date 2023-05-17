import { configureStore } from "@reduxjs/toolkit";
import AppSlice from "./AppSlice";

export const store = configureStore({
    reducer: {
        appSlice: AppSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch