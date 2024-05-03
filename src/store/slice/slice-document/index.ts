import {createSlice} from "@reduxjs/toolkit";
import { DocumentState } from "./types.ts";

const initialState: DocumentState = {
    list: [
        {
            id: 1,
            name: 'Лист 1',
        },
    ],
}

const documentSlice = createSlice({
    name: 'document',
    initialState,
    reducers: {}
})

export default documentSlice.reducer;