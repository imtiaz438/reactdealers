import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { StatusCode } from "../utils/StatusCode";

export const dealerController = new AbortController();

const initialState = {
    data: [],
    status: StatusCode.IDLE,
};

const dealerSlice = createSlice({
    name: "dealer",
    initialState,
    reducers: {
//        fetchDealer(state, action) {
//            state.data = action.payload;
//        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(getDealer.pending, (state, action) => {
            state.status = StatusCode.LOADING
        })
        .addCase(getDealer.fulfilled, (state, action) => {
            state.data = action.payload;
            state.status = StatusCode.IDLE
        })
        .addCase(getDealer.rejected, (state, action) => {
            state.status = StatusCode.ERROR
        })
    }
});

export const {fetchDealer} = dealerSlice.actions;
export default dealerSlice.reducer;

export const getDealer = createAsyncThunk('dealer/get', async () => {
    const response = await fetch('https://sheetdb.io/api/v1/5god6xgfis9lv')
    if (!response.ok) {
        throw Error("Unable to retrieve map")
    }
    const data = await response.json()
    return data
})

//export function getCars() {
//    return async function getCarsThunk(dispatch, getState){
//        const data = await fetch('https://sheetdb.io/api/v1/gfqcm38bwhrl4')
//        const result = await data.json()
//        dispatch(fetchCars(result))
//    }
//}