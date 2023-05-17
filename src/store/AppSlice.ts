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
        addCounter: (state: AppState, action: PayloadAction<string>) => {
            state.name = action.payload;
        }
    }
})

export const {addCounter} = appSlice.actions;

export default appSlice.reducer; 