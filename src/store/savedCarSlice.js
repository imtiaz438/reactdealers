import { createSlice } from "@reduxjs/toolkit";

export const savedController = new AbortController()

const initialState = {};

const wishlistIcon = (key, wishlist = false) => ({
    key, 
    wishlist,
})

const savedCarSlice = createSlice({
    name: "savedCar",
    initialState,
    reducers: {
        add(state, action){
            return {...state, [action.payload.key]: action.payload}
        },

        remove(state, action){
            const temp = {...state}
            delete temp[action.payload]
            return temp
        },
    }
});

export const {add, remove} = savedCarSlice.actions;
export default savedCarSlice.reducer;

export const wishlistThunk = (key, wishlist) => async (dispatch) => {
    const url = `https://sheetdb.io/api/v1/9mdrwloe1chxb`
//    const headers = {
//        "Content-Type": "application/json"
//    }
//    const body = {
//        key, 
//        wishlist
//    }
//    const init = {
//        method: "POST",
//        headers,
//        body
//    }
    const response = await fetch(url, {
        signal: savedController.signal
    })
    if (!response.ok) {
        throw Error("API request failed")
    }
    const data = await response.json()
    const vehicle = data.filter(car => car.vin === key)
    if (!vehicle?.length) {
        throw Error("Car does not exist")
    }
    dispatch(add(wishlistIcon(key, true)))
}

export const deleteWishlist = (key) => async (dispatch) => {
    const url = `https://sheetdb.io/api/v1/9mdrwloe1chxb`
//    const headers = {
//        "Content-Type": "application/json"
//    }
//    const init = {
//        method: "DELETE",
//        headers,
//    }
    const response = await fetch(url, {
        signal: savedController.signal
    })
    if (!response.ok) {
        throw Error("API request failed")
    }
    const data = await response.json()
    const vehicle = data.filter(car => car.vin === key)
    if (!vehicle?.length) {
        throw Error("Car does not exist")
    }
    dispatch(remove(key))
}