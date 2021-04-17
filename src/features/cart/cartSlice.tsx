import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../store'

export interface CartItemInterface {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    amount: number;
}

export interface CartState {
    items: CartItemInterface[]
}

const initialState: CartState = {
    items: []
}


export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            if (state.items.find(item => item.id === action.payload.id)) {
                state.items = [...state.items.map(item => item.id === action.payload.id ? {...item, amount: item.amount + 1} : item)]
            } else {
                state.items = [...state.items, {...action.payload, amount: 1}]
            }
        },
        removeFromCart: (state, action) => {
            if(state.items.find(item => item.id === action.payload)?.amount === 1) {
                state.items = [...state.items.filter(item => item.id !== action.payload)]
            } else {
                state.items = [...state.items.map(item => item.id === action.payload ? {...item, amount: item.amount - 1} : item)]
            }
        }
    }
})

export const { addToCart, removeFromCart } = cartSlice.actions

export const selectCart = (state: RootState) => state.cart.items

export default cartSlice.reducer