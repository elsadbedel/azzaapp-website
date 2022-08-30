import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Product } from './ProductSlice';

export interface IOrder {
    orderItems: Product[],
    orderTotalQuantity: number, // sifarişin ümumi sayı
    orderTotalAmount: number // sifarişin ümumi məbləği
}
export const initialState: IOrder = {
    orderTotalQuantity: 0,
    orderTotalAmount: 0,
    orderItems: []
}
const orderSlice = createSlice({
    name: "orders",
    initialState,
    reducers: {
        addOrder: (state, action: PayloadAction<Product>) => { // increaseOrder too
            state.orderTotalQuantity += 1;

            state.orderTotalAmount += action.payload.price
            const itemIndex = state.orderItems.findIndex(item => item.id === action.payload.id)
            if (itemIndex >= 0) {
                state.orderItems[itemIndex].orderQuantity += 1;
            } else {
                state.orderItems.push(action.payload)
            }
        }, decreaseOrderQuantity: (state, action: PayloadAction<string>) => {
            const itemIndex = state.orderItems.findIndex(item => item.id === action.payload)
            if (state.orderItems[itemIndex].orderQuantity >= 0) {
                state.orderItems[itemIndex].orderQuantity -= 1;
                state.orderTotalQuantity -= 1;
                state.orderTotalAmount -= state.orderItems[itemIndex].price
            }
        }, removeOrder: (state, action: PayloadAction<string>) => {
            const itemIndex = state.orderItems.findIndex(item => item.id === action.payload)
            if (state.orderTotalQuantity >= 0) {
                state.orderTotalQuantity -= state.orderItems[itemIndex].orderQuantity
                state.orderTotalAmount -= state.orderItems[itemIndex].price * state.orderItems[itemIndex].orderQuantity
            }
            state.orderItems = state.orderItems.filter(item => item.id !== action.payload)

        }, removeAllOrder: (state, action: PayloadAction<string>) => {
            if (action.payload === 'removeAll') {
                state.orderTotalQuantity = 0
                state.orderItems = []
            }
        }
    }
})
export default orderSlice.reducer;
export const { addOrder, removeOrder, removeAllOrder, decreaseOrderQuantity } = orderSlice.actions