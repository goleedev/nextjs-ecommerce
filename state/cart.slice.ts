import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import ProductType from 'types/product-type';

export interface IState {
  id: number;
  quantity: number;
}

interface IItem {
  id: number;
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state: IState[], action: PayloadAction<ProductType>) => {
      const itemExists = state.find(
        (item: IItem) => item.id === action.payload.id
      );
      if (itemExists) {
        itemExists.quantity++;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state: IItem[], action: PayloadAction<ProductType>) => {
      const index = state.findIndex(
        (item: IItem) => item.id === action.payload.id
      );
      state.splice(index, 1);
    },
  },
});

export const cartReducer = cartSlice.reducer;
export type ReducerType = ReturnType<typeof cartReducer>;

export const { addToCart, removeFromCart } = cartSlice.actions;
