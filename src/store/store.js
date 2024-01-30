import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import savedCarSlice from "./savedCarSlice";
import carsSlice from "./carsSlice";
import dealerSlice from "./dealerSlice";

const store = configureStore({
    reducer: {
        savedCar: savedCarSlice,
        cars: carsSlice,
        dealer: dealerSlice,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(logger),
})

export default store;