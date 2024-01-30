import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { StatusCode } from "../utils/StatusCode";

export const controller = new AbortController();

const initialState = {
    data: [],
    status: StatusCode.IDLE,
};

const carsSlice = createSlice({
    name: "cars",
    initialState,
    reducers: 
    {
        loadCars(state, action) {
            state.data = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(getCars.pending, (state, action) => {
            state.status = StatusCode.LOADING
        })
        .addCase(getCars.fulfilled, (state, action) => {
            state.data = action.payload;
            state.status = StatusCode.IDLE
        })
        .addCase(getCars.rejected, (state, action) => {
            state.status = StatusCode.ERROR
        })
    }
});

export const {loadCars} = carsSlice.actions;
export default carsSlice.reducer;

export const getCars = createAsyncThunk('cars/get', async () => {
    const response = await fetch('https://sheetdb.io/api/v1/9mdrwloe1chxb')
    if (!response.ok) {
        throw Error("Unable to retrieve data")
    }
    const data = await response.json()
    const numData = await data.map(car => ({
        ...car,
        dealerId: car.dealerId * 1,
        year: car.year * 1,
        mileage: car.mileage * 1,
        retail: car.retail * 1,
        internetPrice: car.internetPrice * 1,
        certified: car.certified * 1
    }))
    return numData
})