import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import orderSlice from "../features/addToCard";
import productSlice from "../features/ProductSlice";
import userSlice from "../features/userSlice";

const store = configureStore({
    reducer: {
        orders: orderSlice,
        products: productSlice,
        users: userSlice,
    }
})
export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>(); //Usedispatch hook
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector; //UseSelector hook