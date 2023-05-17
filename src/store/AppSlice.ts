import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AppState {
    name : string;
}

const initialState : AppState = {
    name: '',
}

export const appSlice = createSlice({
    name: 'appSlice',
    initialState: initialState,
    reducers:{
        addName: (state: AppState, action: PayloadAction<string>) => {
            state.name = action.payload;
        }
    }
})

export const {addName} = appSlice.actions;

export default appSlice.reducer; 