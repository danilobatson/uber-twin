import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import navReducer from "./slices/navSlice.js";
import userReducer from "./slices/userSlice";

const rootReducer = combineReducers({
    nav: navReducer,
    user: userReducer,
});

const store = configureStore({
    reducer: rootReducer,
});

export default store;

