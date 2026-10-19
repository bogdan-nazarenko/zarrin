import { configureStore } from "@reduxjs/toolkit";
import { appReducer } from "@libs/redux";

export const store = configureStore({
    reducer: { app: appReducer },
});
