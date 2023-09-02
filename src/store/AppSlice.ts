import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AppState {
    name : string;
    selectedNumber: number
}

const initialState : AppState = {
    name: '',
    selectedNumber: 0
}

export const appSlice = createSlice({
    name: 'appSlice',
    initialState: initialState,
    reducers:{
        addName: (state: AppState, action: PayloadAction<string>) => {
            state.name = action.payload;
        },
        addNumber: (state: AppState, action: PayloadAction<number>) => {
            state.selectedNumber = action.payload;
        }
    }
})

export const {addName, addNumber} = appSlice.actions;

export default appSlice.reducer; 