import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import data from "../fakeApi/data";

export type Product = {
    id: string;
    name: string;
    type: string;
    image: string;
    info: string;
    volume: string | number;
    price: number;
    orderQuantity: number
}
export interface IProduct {
    products: Product[]
}

export const initialState: IProduct = { products: data }

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        addProduct: (state, action: PayloadAction<Product>) => {
            state.products.push(action.payload)
        },
        removeProduct: (state, action: PayloadAction<string>) => {
            state.products = state.products.filter(item => item.id !== action.payload)
        },
        editProduct: (state, action: PayloadAction<any>) => {
            console.log(action.payload.id);

            const itemIndex = state.products.findIndex(item => item.id === action.payload.id)

            const { id, name, type, image, price, info, orderQuantity, volume } = action.payload

            state.products[itemIndex].id = id;
            state.products[itemIndex].name = name;
            state.products[itemIndex].type = type;
            state.products[itemIndex].image = image;
            state.products[itemIndex].info = info;
            state.products[itemIndex].orderQuantity = orderQuantity;
            state.products[itemIndex].volume = volume;
            state.products[itemIndex].price = price;


            console.log(state.products[itemIndex].name);


        }

    }
})

export default productSlice.reducer;
export const { removeProduct, addProduct, editProduct } = productSlice.actions